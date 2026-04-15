# Diretrizes de testes (Jest) — Ribbit API

Este documento define o padrão para **testes unitários com Jest** no backend, alinhado à organização atual do repositório.

## Visão da arquitetura atual

- **Runtime:** Node.js, **ESM** (`"type": "module"` no `package.json`).
- **HTTP:** Express 5.
- **Parte das rotas:** gerada pelo **tsoa** (`src/controller/*` com decorators → `src/generated/routes.ts`).
- **Outras rotas:** registradas manualmente em `src/server.ts` (ex.: CRUD de cursos via `CourseController`).
- **Camadas de domínio:**
  - `src/controller/` — orquestração HTTP (tsoa ou Express direto).
  - `src/service/` — regras de negócio e integrações (ex.: `AuthService`, `GoogleDriveService`).
  - `src/repository/` — acesso a dados (Prisma).
  - `src/dto/` — tipos/contratos de entrada.
  - `src/middleware/` — autenticação tsoa (`tsoaAuth.ts`).
- **Gerados (não editar):** `src/generated/` (incluindo Prisma client e rotas tsoa).

Os testes devem **focar na lógica testável** nas camadas **service** e **repository**, e nos **controllers** que usam Express manualmente. Para controllers exclusivamente tsoa, priorize testes indiretos via service/repository ou testes de integração em etapa futura (fora do escopo deste guia de unitários, se a equipe decidir).

## Onde colocar os arquivos de teste

Sem alterar a estrutura de código de produção, use uma área dedicada espelhando `src/`:

```text
tests/
  unit/
    controller/     # ex.: CourseController.test.ts (rotas manuais em server.ts)
    service/        # ex.: AuthService.test.ts, UserService.test.ts
    repository/     # ex.: UserRepository.test.ts
    middleware/     # ex.: tsoaAuth.test.ts (se aplicável)
```

**Convenção de nome:** mesmo nome do arquivo sob teste + sufixo `.test.ts`  
Exemplos:

- `src/service/UserService.ts` → `tests/unit/service/UserService.test.ts`
- `src/controller/CourseController.ts` → `tests/unit/controller/CourseController.test.ts`

Evite colocar `*.test.ts` dentro de `src/generated/`.

## Convenções Jest

- Agrupe cenários com `describe` (por classe/módulo ou por método público).
- Cada caso com `it` ou `test` e descrição clara em português ou inglês, **consistente no repositório**.
- **Um conceito por teste**; evite encadear muitas asserções não relacionadas.
- Use `beforeEach` / `afterEach` para resetar mocks e evitar vazamento de estado entre testes.

## Mocks e isolamento

- **Dependências externas** (Prisma, Google APIs, filesystem, rede) devem ser **mockadas** em testes unitários.
- **`jest.mock('módulo')`** para substituir módulos inteiros (atenção à resolução ESM: pode exigir configuração específica do Jest para TypeScript/ESM quando o Jest for adicionado ao projeto).
- **`jest.spyOn(obj, 'method')`** para observar ou substituir implementações pontuais sem mockar o módulo todo.
- Repositórios: mockar o client Prisma (`$transaction`, `findMany`, etc.) ou mockar o próprio repositório quando o teste for do service.
- **bcrypt** / **jwt**: mockar em testes que validam fluxo de auth sem custo criptográfico real.

### Exemplo mínimo (ilustrativo)

```typescript
import { describe, it, expect, jest, beforeEach } from "@jest/globals";

describe("ExemploService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar sucesso quando o repositório encontra o registro", async () => {
    const findById = jest.fn().mockResolvedValue({ id: 1 });
    // injetar ou construir o service com o mock do repositório
    expect(findById).toBeDefined();
  });
});
```

(Ajuste imports e setup quando o Jest + TypeScript + ESM estiverem configurados no projeto.)

## O que cobrir em cada camada

| Camada        | Foco principal |
|---------------|----------------|
| **Service**   | Regras de negócio, erros esperados, mensagens, ramificações. |
| **Repository**| Queries/comandos traduzidos corretamente (com Prisma mockado). |
| **Controller**| Status HTTP, JSON de resposta, delegação ao service (com service mockado). |

Inclua sempre que fizer sentido:

- Fluxos de **sucesso**.
- **Erros** (exceções, retornos `400`, validações).
- **Entradas inválidas** (quando validadas na camada testada).

## Boas práticas

- Não depender de **banco real** ou **servidor HTTP** em testes unitários.
- Preferir **factories** ou objetos mínimos para dados de teste.
- Manter testes **determinísticos** (sem hora atual ou random sem seed, salvo mock de `Date`).
- Alinhar nomenclatura e estilo com o **TypeScript** já usado no projeto (`strict` conforme `tsconfig`).

## Referência cruzada com o Postman

A coleção `postman.json` descreve os **contratos HTTP** por pasta (feature). Use-a como checklist de comportamento esperado ao definir casos de teste para a lógica que implementa cada endpoint — sem duplicar o Postman dentro do Jest; o Jest valida unidades de código.

## Próximos passos (fora deste documento)

A adição de Jest, presets TypeScript/ESM e script `npm test` no `package.json` será feita quando a equipe implementar os testes; este arquivo define apenas **padrão e planejamento**.
