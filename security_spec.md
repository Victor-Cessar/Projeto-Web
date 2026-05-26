# Matemagic Security Specification

## 1. Data Invariants

- As coordenadas de pontuação do perfil de um usuário (Nível, XP, lista de medalhas) só podem ser alteradas pelo proprietário exato e autenticado daquela conta.
- Métricas de imutabilidade em referências sensíveis de conta (userId, email, coordenadas de data) são rigidamente verificadas em atualizações consecutivas.
- Os caminhos da coleção privada de PII `/users/{userId}/private/info` são protegidos por uma verificação estrita de propriedade, impedindo o acesso de outros jogadores.

## 2. Threat Vector Payloads ("Dirty Dozen")

Para proteger o aplicativo, estes formatos inválidos serão rejeitados por nossas Regras de Segurança do Firestore:

1. **Injeção de Auto-Elevação de Nível**: Tentar gravar `level: 2500` no Perfil. (Rejeitado pelos limites: `level <= 1000`).
2. **Falsificação de XP Negativo**: Definir `xp: -100` em uma atualização. (Rejeitado pelas validações: `xp >= 0`).
3. **Chaves Fantasmas na Coleção**: Injetar propriedades suplementares como `isAdmin: true` no mapa de campos públicos. (Rejeitado pelo validador de tamanho estrito de chaves).
4. **Falsificação de Identidade**: Tentar inserir um documento de perfil público sob o UID de um atacante contendo `displayName: "Paulo"`, enquanto o UID do token de autenticação pertence a outro. (Rejeitado pela barreira de validação `isOwner`).
5. **Raspagem Geral de PII**: Um atacante tentando solicitar consultas de listagem em massa no caminho de informações privadas sem chaves correspondentes. (Bloqueado pelo bloco de leitura `isOwner`).
6. **ID de Documento Longo Envenenado**: Um atacante criando um perfil onde o tamanho do ID do documento é maior que 1MB de caracteres. (Bloqueado pelo verificador de tamanho `isValidId` <= 128 caracteres).
7. **Burla de Restrição de Assinatura**: Fornecer um payload com uma lista vazia em vez de arrays nas chaves de lista da criação inicial. (Rejeitado pelos mapas de verificação de requisitos `hasAll`).
8. **Modificação de E-mail**: Um atacante tentando atualizar um cartão de perfil privado e alterando o endereço de `email` diretamente. (Rejeitado pela verificação de imutabilidade `incoming().email == existing().email`).
9. **Alteração do Timestamp de Criação**: Um atacante tentando sobrescrever a data de criação original nas informações privadas do perfil do usuário. (Rejeitado pelas invariantes de atualização privada que verificam a igualdade).
10. **Injeção de String Gigante**: Tentar gravar um payload de 2MB nos metadados de progresso. (Bloqueado pelos limites de tamanho máximo de string de progresso de <= 50000 caracteres).
11. **Alteração do nome de exibição na atualização**: Tentar sobrescrever o nome de exibição do usuário para escapar de banimentos se uma lista de banidos o bloquear.
12. **Caracteres fora dos limites no ID**: Registrar-se com um ID de documento repleto de códigos especiais de injeção SQL/noSQL. (Bloqueado pela expressão regular `^[a-zA-Z0-9_\-]+$`).
