
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model Renamedclass
 * This model has been renamed to 'Renamedclass' during introspection, because the original name 'class' is reserved.
 */
export type Renamedclass = $Result.DefaultSelection<Prisma.$RenamedclassPayload>
/**
 * Model class_file
 * 
 */
export type class_file = $Result.DefaultSelection<Prisma.$class_filePayload>
/**
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model enrollments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type enrollments = $Result.DefaultSelection<Prisma.$enrollmentsPayload>
/**
 * Model module
 * 
 */
export type module = $Result.DefaultSelection<Prisma.$modulePayload>
/**
 * Model student_progress
 * 
 */
export type student_progress = $Result.DefaultSelection<Prisma.$student_progressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role_enum: {
  prof: 'prof',
  aluno: 'aluno'
};

export type user_role_enum = (typeof user_role_enum)[keyof typeof user_role_enum]

}

export type user_role_enum = $Enums.user_role_enum

export const user_role_enum: typeof $Enums.user_role_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renamedclass`: Exposes CRUD operations for the **Renamedclass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Renamedclasses
    * const renamedclasses = await prisma.renamedclass.findMany()
    * ```
    */
  get renamedclass(): Prisma.RenamedclassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class_file`: Exposes CRUD operations for the **class_file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Class_files
    * const class_files = await prisma.class_file.findMany()
    * ```
    */
  get class_file(): Prisma.class_fileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollments`: Exposes CRUD operations for the **enrollments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollments.findMany()
    * ```
    */
  get enrollments(): Prisma.enrollmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.moduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_progress`: Exposes CRUD operations for the **student_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_progresses
    * const student_progresses = await prisma.student_progress.findMany()
    * ```
    */
  get student_progress(): Prisma.student_progressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    Renamedclass: 'Renamedclass',
    class_file: 'class_file',
    course: 'course',
    enrollments: 'enrollments',
    module: 'module',
    student_progress: 'student_progress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "renamedclass" | "class_file" | "course" | "enrollments" | "module" | "student_progress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Renamedclass: {
        payload: Prisma.$RenamedclassPayload<ExtArgs>
        fields: Prisma.RenamedclassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenamedclassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenamedclassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          findFirst: {
            args: Prisma.RenamedclassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenamedclassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          findMany: {
            args: Prisma.RenamedclassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>[]
          }
          create: {
            args: Prisma.RenamedclassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          createMany: {
            args: Prisma.RenamedclassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenamedclassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>[]
          }
          delete: {
            args: Prisma.RenamedclassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          update: {
            args: Prisma.RenamedclassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          deleteMany: {
            args: Prisma.RenamedclassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenamedclassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenamedclassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>[]
          }
          upsert: {
            args: Prisma.RenamedclassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          aggregate: {
            args: Prisma.RenamedclassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenamedclass>
          }
          groupBy: {
            args: Prisma.RenamedclassGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenamedclassGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenamedclassCountArgs<ExtArgs>
            result: $Utils.Optional<RenamedclassCountAggregateOutputType> | number
          }
        }
      }
      class_file: {
        payload: Prisma.$class_filePayload<ExtArgs>
        fields: Prisma.class_fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.class_fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.class_fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>
          }
          findFirst: {
            args: Prisma.class_fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.class_fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>
          }
          findMany: {
            args: Prisma.class_fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>[]
          }
          create: {
            args: Prisma.class_fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>
          }
          createMany: {
            args: Prisma.class_fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.class_fileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>[]
          }
          delete: {
            args: Prisma.class_fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>
          }
          update: {
            args: Prisma.class_fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>
          }
          deleteMany: {
            args: Prisma.class_fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.class_fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.class_fileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>[]
          }
          upsert: {
            args: Prisma.class_fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_filePayload>
          }
          aggregate: {
            args: Prisma.Class_fileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass_file>
          }
          groupBy: {
            args: Prisma.class_fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Class_fileGroupByOutputType>[]
          }
          count: {
            args: Prisma.class_fileCountArgs<ExtArgs>
            result: $Utils.Optional<Class_fileCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      enrollments: {
        payload: Prisma.$enrollmentsPayload<ExtArgs>
        fields: Prisma.enrollmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          findFirst: {
            args: Prisma.enrollmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          findMany: {
            args: Prisma.enrollmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          create: {
            args: Prisma.enrollmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          createMany: {
            args: Prisma.enrollmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enrollmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          delete: {
            args: Prisma.enrollmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          update: {
            args: Prisma.enrollmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          deleteMany: {
            args: Prisma.enrollmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enrollmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          upsert: {
            args: Prisma.enrollmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollments>
          }
          groupBy: {
            args: Prisma.enrollmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollmentsCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsCountAggregateOutputType> | number
          }
        }
      }
      module: {
        payload: Prisma.$modulePayload<ExtArgs>
        fields: Prisma.moduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findFirst: {
            args: Prisma.moduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findMany: {
            args: Prisma.moduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          create: {
            args: Prisma.moduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          createMany: {
            args: Prisma.moduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          delete: {
            args: Prisma.moduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          update: {
            args: Prisma.moduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          deleteMany: {
            args: Prisma.moduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          upsert: {
            args: Prisma.moduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.moduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      student_progress: {
        payload: Prisma.$student_progressPayload<ExtArgs>
        fields: Prisma.student_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>
          }
          findFirst: {
            args: Prisma.student_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>
          }
          findMany: {
            args: Prisma.student_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>[]
          }
          create: {
            args: Prisma.student_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>
          }
          createMany: {
            args: Prisma.student_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.student_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>[]
          }
          delete: {
            args: Prisma.student_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>
          }
          update: {
            args: Prisma.student_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>
          }
          deleteMany: {
            args: Prisma.student_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.student_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>[]
          }
          upsert: {
            args: Prisma.student_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_progressPayload>
          }
          aggregate: {
            args: Prisma.Student_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_progress>
          }
          groupBy: {
            args: Prisma.student_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_progressCountArgs<ExtArgs>
            result: $Utils.Optional<Student_progressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    renamedclass?: RenamedclassOmit
    class_file?: class_fileOmit
    course?: courseOmit
    enrollments?: enrollmentsOmit
    module?: moduleOmit
    student_progress?: student_progressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    course: number
    enrollments: number
    student_progress: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | UsersCountOutputTypeCountCourseArgs
    enrollments?: boolean | UsersCountOutputTypeCountEnrollmentsArgs
    student_progress?: boolean | UsersCountOutputTypeCountStudent_progressArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStudent_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_progressWhereInput
  }


  /**
   * Count Type RenamedclassCountOutputType
   */

  export type RenamedclassCountOutputType = {
    class_file: number
    student_progress: number
  }

  export type RenamedclassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_file?: boolean | RenamedclassCountOutputTypeCountClass_fileArgs
    student_progress?: boolean | RenamedclassCountOutputTypeCountStudent_progressArgs
  }

  // Custom InputTypes
  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenamedclassCountOutputType
     */
    select?: RenamedclassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeCountClass_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_fileWhereInput
  }

  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeCountStudent_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_progressWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    enrollments: number
    module: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    module?: boolean | CourseCountOutputTypeCountModuleArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    Renamedclass: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | ModuleCountOutputTypeCountRenamedclassArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountRenamedclassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenamedclassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_uuid: string | null
    email: string | null
    role: $Enums.user_role_enum | null
    password_hash: string | null
    full_name: string | null
    avatar_url: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_uuid: string | null
    email: string | null
    role: $Enums.user_role_enum | null
    password_hash: string | null
    full_name: string | null
    avatar_url: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_uuid: number
    email: number
    role: number
    password_hash: number
    full_name: number
    avatar_url: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_uuid?: true
    email?: true
    role?: true
    password_hash?: true
    full_name?: true
    avatar_url?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_uuid?: true
    email?: true
    role?: true
    password_hash?: true
    full_name?: true
    avatar_url?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_uuid?: true
    email?: true
    role?: true
    password_hash?: true
    full_name?: true
    avatar_url?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_uuid: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
    course?: boolean | users$courseArgs<ExtArgs>
    enrollments?: boolean | users$enrollmentsArgs<ExtArgs>
    student_progress?: boolean | users$student_progressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_uuid" | "email" | "role" | "password_hash" | "full_name" | "avatar_url" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | users$courseArgs<ExtArgs>
    enrollments?: boolean | users$enrollmentsArgs<ExtArgs>
    student_progress?: boolean | users$student_progressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[]
      enrollments: Prisma.$enrollmentsPayload<ExtArgs>[]
      student_progress: Prisma.$student_progressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_uuid: string
      email: string
      role: $Enums.user_role_enum
      password_hash: string
      full_name: string
      avatar_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_uuid`
     * const usersWithUser_uuidOnly = await prisma.users.findMany({ select: { user_uuid: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_uuid`
     * const usersWithUser_uuidOnly = await prisma.users.createManyAndReturn({
     *   select: { user_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_uuid`
     * const usersWithUser_uuidOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends users$courseArgs<ExtArgs> = {}>(args?: Subset<T, users$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends users$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student_progress<T extends users$student_progressArgs<ExtArgs> = {}>(args?: Subset<T, users$student_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_uuid: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'user_role_enum'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly avatar_url: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.course
   */
  export type users$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * users.enrollments
   */
  export type users$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    cursor?: enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * users.student_progress
   */
  export type users$student_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    where?: student_progressWhereInput
    orderBy?: student_progressOrderByWithRelationInput | student_progressOrderByWithRelationInput[]
    cursor?: student_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model Renamedclass
   */

  export type AggregateRenamedclass = {
    _count: RenamedclassCountAggregateOutputType | null
    _avg: RenamedclassAvgAggregateOutputType | null
    _sum: RenamedclassSumAggregateOutputType | null
    _min: RenamedclassMinAggregateOutputType | null
    _max: RenamedclassMaxAggregateOutputType | null
  }

  export type RenamedclassAvgAggregateOutputType = {
    class_id: number | null
    index_order: number | null
    fk_module: number | null
  }

  export type RenamedclassSumAggregateOutputType = {
    class_id: number | null
    index_order: number | null
    fk_module: number | null
  }

  export type RenamedclassMinAggregateOutputType = {
    class_id: number | null
    title: string | null
    description: string | null
    index_order: number | null
    fk_module: number | null
  }

  export type RenamedclassMaxAggregateOutputType = {
    class_id: number | null
    title: string | null
    description: string | null
    index_order: number | null
    fk_module: number | null
  }

  export type RenamedclassCountAggregateOutputType = {
    class_id: number
    title: number
    description: number
    index_order: number
    fk_module: number
    _all: number
  }


  export type RenamedclassAvgAggregateInputType = {
    class_id?: true
    index_order?: true
    fk_module?: true
  }

  export type RenamedclassSumAggregateInputType = {
    class_id?: true
    index_order?: true
    fk_module?: true
  }

  export type RenamedclassMinAggregateInputType = {
    class_id?: true
    title?: true
    description?: true
    index_order?: true
    fk_module?: true
  }

  export type RenamedclassMaxAggregateInputType = {
    class_id?: true
    title?: true
    description?: true
    index_order?: true
    fk_module?: true
  }

  export type RenamedclassCountAggregateInputType = {
    class_id?: true
    title?: true
    description?: true
    index_order?: true
    fk_module?: true
    _all?: true
  }

  export type RenamedclassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renamedclass to aggregate.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Renamedclasses
    **/
    _count?: true | RenamedclassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RenamedclassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RenamedclassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenamedclassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenamedclassMaxAggregateInputType
  }

  export type GetRenamedclassAggregateType<T extends RenamedclassAggregateArgs> = {
        [P in keyof T & keyof AggregateRenamedclass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenamedclass[P]>
      : GetScalarType<T[P], AggregateRenamedclass[P]>
  }




  export type RenamedclassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenamedclassWhereInput
    orderBy?: RenamedclassOrderByWithAggregationInput | RenamedclassOrderByWithAggregationInput[]
    by: RenamedclassScalarFieldEnum[] | RenamedclassScalarFieldEnum
    having?: RenamedclassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenamedclassCountAggregateInputType | true
    _avg?: RenamedclassAvgAggregateInputType
    _sum?: RenamedclassSumAggregateInputType
    _min?: RenamedclassMinAggregateInputType
    _max?: RenamedclassMaxAggregateInputType
  }

  export type RenamedclassGroupByOutputType = {
    class_id: number
    title: string
    description: string
    index_order: number
    fk_module: number
    _count: RenamedclassCountAggregateOutputType | null
    _avg: RenamedclassAvgAggregateOutputType | null
    _sum: RenamedclassSumAggregateOutputType | null
    _min: RenamedclassMinAggregateOutputType | null
    _max: RenamedclassMaxAggregateOutputType | null
  }

  type GetRenamedclassGroupByPayload<T extends RenamedclassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenamedclassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenamedclassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenamedclassGroupByOutputType[P]>
            : GetScalarType<T[P], RenamedclassGroupByOutputType[P]>
        }
      >
    >


  export type RenamedclassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
    module?: boolean | moduleDefaultArgs<ExtArgs>
    class_file?: boolean | Renamedclass$class_fileArgs<ExtArgs>
    student_progress?: boolean | Renamedclass$student_progressArgs<ExtArgs>
    _count?: boolean | RenamedclassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renamedclass"]>

  export type RenamedclassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renamedclass"]>

  export type RenamedclassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renamedclass"]>

  export type RenamedclassSelectScalar = {
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
  }

  export type RenamedclassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"class_id" | "title" | "description" | "index_order" | "fk_module", ExtArgs["result"]["renamedclass"]>
  export type RenamedclassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>
    class_file?: boolean | Renamedclass$class_fileArgs<ExtArgs>
    student_progress?: boolean | Renamedclass$student_progressArgs<ExtArgs>
    _count?: boolean | RenamedclassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RenamedclassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }
  export type RenamedclassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }

  export type $RenamedclassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Renamedclass"
    objects: {
      module: Prisma.$modulePayload<ExtArgs>
      class_file: Prisma.$class_filePayload<ExtArgs>[]
      student_progress: Prisma.$student_progressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      class_id: number
      title: string
      description: string
      index_order: number
      fk_module: number
    }, ExtArgs["result"]["renamedclass"]>
    composites: {}
  }

  type RenamedclassGetPayload<S extends boolean | null | undefined | RenamedclassDefaultArgs> = $Result.GetResult<Prisma.$RenamedclassPayload, S>

  type RenamedclassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenamedclassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenamedclassCountAggregateInputType | true
    }

  export interface RenamedclassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Renamedclass'], meta: { name: 'Renamedclass' } }
    /**
     * Find zero or one Renamedclass that matches the filter.
     * @param {RenamedclassFindUniqueArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenamedclassFindUniqueArgs>(args: SelectSubset<T, RenamedclassFindUniqueArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Renamedclass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenamedclassFindUniqueOrThrowArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenamedclassFindUniqueOrThrowArgs>(args: SelectSubset<T, RenamedclassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renamedclass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindFirstArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenamedclassFindFirstArgs>(args?: SelectSubset<T, RenamedclassFindFirstArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renamedclass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindFirstOrThrowArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenamedclassFindFirstOrThrowArgs>(args?: SelectSubset<T, RenamedclassFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Renamedclasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Renamedclasses
     * const renamedclasses = await prisma.renamedclass.findMany()
     * 
     * // Get first 10 Renamedclasses
     * const renamedclasses = await prisma.renamedclass.findMany({ take: 10 })
     * 
     * // Only select the `class_id`
     * const renamedclassWithClass_idOnly = await prisma.renamedclass.findMany({ select: { class_id: true } })
     * 
     */
    findMany<T extends RenamedclassFindManyArgs>(args?: SelectSubset<T, RenamedclassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Renamedclass.
     * @param {RenamedclassCreateArgs} args - Arguments to create a Renamedclass.
     * @example
     * // Create one Renamedclass
     * const Renamedclass = await prisma.renamedclass.create({
     *   data: {
     *     // ... data to create a Renamedclass
     *   }
     * })
     * 
     */
    create<T extends RenamedclassCreateArgs>(args: SelectSubset<T, RenamedclassCreateArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Renamedclasses.
     * @param {RenamedclassCreateManyArgs} args - Arguments to create many Renamedclasses.
     * @example
     * // Create many Renamedclasses
     * const renamedclass = await prisma.renamedclass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenamedclassCreateManyArgs>(args?: SelectSubset<T, RenamedclassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Renamedclasses and returns the data saved in the database.
     * @param {RenamedclassCreateManyAndReturnArgs} args - Arguments to create many Renamedclasses.
     * @example
     * // Create many Renamedclasses
     * const renamedclass = await prisma.renamedclass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Renamedclasses and only return the `class_id`
     * const renamedclassWithClass_idOnly = await prisma.renamedclass.createManyAndReturn({
     *   select: { class_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenamedclassCreateManyAndReturnArgs>(args?: SelectSubset<T, RenamedclassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Renamedclass.
     * @param {RenamedclassDeleteArgs} args - Arguments to delete one Renamedclass.
     * @example
     * // Delete one Renamedclass
     * const Renamedclass = await prisma.renamedclass.delete({
     *   where: {
     *     // ... filter to delete one Renamedclass
     *   }
     * })
     * 
     */
    delete<T extends RenamedclassDeleteArgs>(args: SelectSubset<T, RenamedclassDeleteArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Renamedclass.
     * @param {RenamedclassUpdateArgs} args - Arguments to update one Renamedclass.
     * @example
     * // Update one Renamedclass
     * const renamedclass = await prisma.renamedclass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenamedclassUpdateArgs>(args: SelectSubset<T, RenamedclassUpdateArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Renamedclasses.
     * @param {RenamedclassDeleteManyArgs} args - Arguments to filter Renamedclasses to delete.
     * @example
     * // Delete a few Renamedclasses
     * const { count } = await prisma.renamedclass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenamedclassDeleteManyArgs>(args?: SelectSubset<T, RenamedclassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Renamedclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Renamedclasses
     * const renamedclass = await prisma.renamedclass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenamedclassUpdateManyArgs>(args: SelectSubset<T, RenamedclassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Renamedclasses and returns the data updated in the database.
     * @param {RenamedclassUpdateManyAndReturnArgs} args - Arguments to update many Renamedclasses.
     * @example
     * // Update many Renamedclasses
     * const renamedclass = await prisma.renamedclass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Renamedclasses and only return the `class_id`
     * const renamedclassWithClass_idOnly = await prisma.renamedclass.updateManyAndReturn({
     *   select: { class_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenamedclassUpdateManyAndReturnArgs>(args: SelectSubset<T, RenamedclassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Renamedclass.
     * @param {RenamedclassUpsertArgs} args - Arguments to update or create a Renamedclass.
     * @example
     * // Update or create a Renamedclass
     * const renamedclass = await prisma.renamedclass.upsert({
     *   create: {
     *     // ... data to create a Renamedclass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Renamedclass we want to update
     *   }
     * })
     */
    upsert<T extends RenamedclassUpsertArgs>(args: SelectSubset<T, RenamedclassUpsertArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Renamedclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassCountArgs} args - Arguments to filter Renamedclasses to count.
     * @example
     * // Count the number of Renamedclasses
     * const count = await prisma.renamedclass.count({
     *   where: {
     *     // ... the filter for the Renamedclasses we want to count
     *   }
     * })
    **/
    count<T extends RenamedclassCountArgs>(
      args?: Subset<T, RenamedclassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenamedclassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Renamedclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RenamedclassAggregateArgs>(args: Subset<T, RenamedclassAggregateArgs>): Prisma.PrismaPromise<GetRenamedclassAggregateType<T>>

    /**
     * Group by Renamedclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RenamedclassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenamedclassGroupByArgs['orderBy'] }
        : { orderBy?: RenamedclassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RenamedclassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenamedclassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Renamedclass model
   */
  readonly fields: RenamedclassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Renamedclass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenamedclassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class_file<T extends Renamedclass$class_fileArgs<ExtArgs> = {}>(args?: Subset<T, Renamedclass$class_fileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student_progress<T extends Renamedclass$student_progressArgs<ExtArgs> = {}>(args?: Subset<T, Renamedclass$student_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Renamedclass model
   */
  interface RenamedclassFieldRefs {
    readonly class_id: FieldRef<"Renamedclass", 'Int'>
    readonly title: FieldRef<"Renamedclass", 'String'>
    readonly description: FieldRef<"Renamedclass", 'String'>
    readonly index_order: FieldRef<"Renamedclass", 'Int'>
    readonly fk_module: FieldRef<"Renamedclass", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Renamedclass findUnique
   */
  export type RenamedclassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass findUniqueOrThrow
   */
  export type RenamedclassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass findFirst
   */
  export type RenamedclassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renamedclasses.
     */
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * Renamedclass findFirstOrThrow
   */
  export type RenamedclassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renamedclasses.
     */
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * Renamedclass findMany
   */
  export type RenamedclassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclasses to fetch.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * Renamedclass create
   */
  export type RenamedclassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * The data needed to create a Renamedclass.
     */
    data: XOR<RenamedclassCreateInput, RenamedclassUncheckedCreateInput>
  }

  /**
   * Renamedclass createMany
   */
  export type RenamedclassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Renamedclasses.
     */
    data: RenamedclassCreateManyInput | RenamedclassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Renamedclass createManyAndReturn
   */
  export type RenamedclassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * The data used to create many Renamedclasses.
     */
    data: RenamedclassCreateManyInput | RenamedclassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Renamedclass update
   */
  export type RenamedclassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * The data needed to update a Renamedclass.
     */
    data: XOR<RenamedclassUpdateInput, RenamedclassUncheckedUpdateInput>
    /**
     * Choose, which Renamedclass to update.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass updateMany
   */
  export type RenamedclassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Renamedclasses.
     */
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyInput>
    /**
     * Filter which Renamedclasses to update
     */
    where?: RenamedclassWhereInput
    /**
     * Limit how many Renamedclasses to update.
     */
    limit?: number
  }

  /**
   * Renamedclass updateManyAndReturn
   */
  export type RenamedclassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * The data used to update Renamedclasses.
     */
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyInput>
    /**
     * Filter which Renamedclasses to update
     */
    where?: RenamedclassWhereInput
    /**
     * Limit how many Renamedclasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Renamedclass upsert
   */
  export type RenamedclassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * The filter to search for the Renamedclass to update in case it exists.
     */
    where: RenamedclassWhereUniqueInput
    /**
     * In case the Renamedclass found by the `where` argument doesn't exist, create a new Renamedclass with this data.
     */
    create: XOR<RenamedclassCreateInput, RenamedclassUncheckedCreateInput>
    /**
     * In case the Renamedclass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenamedclassUpdateInput, RenamedclassUncheckedUpdateInput>
  }

  /**
   * Renamedclass delete
   */
  export type RenamedclassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter which Renamedclass to delete.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass deleteMany
   */
  export type RenamedclassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renamedclasses to delete
     */
    where?: RenamedclassWhereInput
    /**
     * Limit how many Renamedclasses to delete.
     */
    limit?: number
  }

  /**
   * Renamedclass.class_file
   */
  export type Renamedclass$class_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    where?: class_fileWhereInput
    orderBy?: class_fileOrderByWithRelationInput | class_fileOrderByWithRelationInput[]
    cursor?: class_fileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * Renamedclass.student_progress
   */
  export type Renamedclass$student_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    where?: student_progressWhereInput
    orderBy?: student_progressOrderByWithRelationInput | student_progressOrderByWithRelationInput[]
    cursor?: student_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * Renamedclass without action
   */
  export type RenamedclassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
  }


  /**
   * Model class_file
   */

  export type AggregateClass_file = {
    _count: Class_fileCountAggregateOutputType | null
    _avg: Class_fileAvgAggregateOutputType | null
    _sum: Class_fileSumAggregateOutputType | null
    _min: Class_fileMinAggregateOutputType | null
    _max: Class_fileMaxAggregateOutputType | null
  }

  export type Class_fileAvgAggregateOutputType = {
    file_id: number | null
    class_id: number | null
  }

  export type Class_fileSumAggregateOutputType = {
    file_id: number | null
    class_id: number | null
  }

  export type Class_fileMinAggregateOutputType = {
    file_id: number | null
    display_name: string | null
    storage_path: string | null
    file_url: string | null
    file_type: string | null
    class_id: number | null
  }

  export type Class_fileMaxAggregateOutputType = {
    file_id: number | null
    display_name: string | null
    storage_path: string | null
    file_url: string | null
    file_type: string | null
    class_id: number | null
  }

  export type Class_fileCountAggregateOutputType = {
    file_id: number
    display_name: number
    storage_path: number
    file_url: number
    file_type: number
    metadata: number
    class_id: number
    _all: number
  }


  export type Class_fileAvgAggregateInputType = {
    file_id?: true
    class_id?: true
  }

  export type Class_fileSumAggregateInputType = {
    file_id?: true
    class_id?: true
  }

  export type Class_fileMinAggregateInputType = {
    file_id?: true
    display_name?: true
    storage_path?: true
    file_url?: true
    file_type?: true
    class_id?: true
  }

  export type Class_fileMaxAggregateInputType = {
    file_id?: true
    display_name?: true
    storage_path?: true
    file_url?: true
    file_type?: true
    class_id?: true
  }

  export type Class_fileCountAggregateInputType = {
    file_id?: true
    display_name?: true
    storage_path?: true
    file_url?: true
    file_type?: true
    metadata?: true
    class_id?: true
    _all?: true
  }

  export type Class_fileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which class_file to aggregate.
     */
    where?: class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_files to fetch.
     */
    orderBy?: class_fileOrderByWithRelationInput | class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned class_files
    **/
    _count?: true | Class_fileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Class_fileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Class_fileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Class_fileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Class_fileMaxAggregateInputType
  }

  export type GetClass_fileAggregateType<T extends Class_fileAggregateArgs> = {
        [P in keyof T & keyof AggregateClass_file]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass_file[P]>
      : GetScalarType<T[P], AggregateClass_file[P]>
  }




  export type class_fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_fileWhereInput
    orderBy?: class_fileOrderByWithAggregationInput | class_fileOrderByWithAggregationInput[]
    by: Class_fileScalarFieldEnum[] | Class_fileScalarFieldEnum
    having?: class_fileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Class_fileCountAggregateInputType | true
    _avg?: Class_fileAvgAggregateInputType
    _sum?: Class_fileSumAggregateInputType
    _min?: Class_fileMinAggregateInputType
    _max?: Class_fileMaxAggregateInputType
  }

  export type Class_fileGroupByOutputType = {
    file_id: number
    display_name: string
    storage_path: string
    file_url: string | null
    file_type: string | null
    metadata: JsonValue | null
    class_id: number
    _count: Class_fileCountAggregateOutputType | null
    _avg: Class_fileAvgAggregateOutputType | null
    _sum: Class_fileSumAggregateOutputType | null
    _min: Class_fileMinAggregateOutputType | null
    _max: Class_fileMaxAggregateOutputType | null
  }

  type GetClass_fileGroupByPayload<T extends class_fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Class_fileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Class_fileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Class_fileGroupByOutputType[P]>
            : GetScalarType<T[P], Class_fileGroupByOutputType[P]>
        }
      >
    >


  export type class_fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_file"]>

  export type class_fileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_file"]>

  export type class_fileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_file"]>

  export type class_fileSelectScalar = {
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
  }

  export type class_fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "display_name" | "storage_path" | "file_url" | "file_type" | "metadata" | "class_id", ExtArgs["result"]["class_file"]>
  export type class_fileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
  }
  export type class_fileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
  }
  export type class_fileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
  }

  export type $class_filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "class_file"
    objects: {
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: number
      display_name: string
      storage_path: string
      file_url: string | null
      file_type: string | null
      metadata: Prisma.JsonValue | null
      class_id: number
    }, ExtArgs["result"]["class_file"]>
    composites: {}
  }

  type class_fileGetPayload<S extends boolean | null | undefined | class_fileDefaultArgs> = $Result.GetResult<Prisma.$class_filePayload, S>

  type class_fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<class_fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Class_fileCountAggregateInputType | true
    }

  export interface class_fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['class_file'], meta: { name: 'class_file' } }
    /**
     * Find zero or one Class_file that matches the filter.
     * @param {class_fileFindUniqueArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends class_fileFindUniqueArgs>(args: SelectSubset<T, class_fileFindUniqueArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class_file that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {class_fileFindUniqueOrThrowArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends class_fileFindUniqueOrThrowArgs>(args: SelectSubset<T, class_fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_file that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_fileFindFirstArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends class_fileFindFirstArgs>(args?: SelectSubset<T, class_fileFindFirstArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_file that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_fileFindFirstOrThrowArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends class_fileFindFirstOrThrowArgs>(args?: SelectSubset<T, class_fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Class_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_fileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Class_files
     * const class_files = await prisma.class_file.findMany()
     * 
     * // Get first 10 Class_files
     * const class_files = await prisma.class_file.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const class_fileWithFile_idOnly = await prisma.class_file.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends class_fileFindManyArgs>(args?: SelectSubset<T, class_fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class_file.
     * @param {class_fileCreateArgs} args - Arguments to create a Class_file.
     * @example
     * // Create one Class_file
     * const Class_file = await prisma.class_file.create({
     *   data: {
     *     // ... data to create a Class_file
     *   }
     * })
     * 
     */
    create<T extends class_fileCreateArgs>(args: SelectSubset<T, class_fileCreateArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Class_files.
     * @param {class_fileCreateManyArgs} args - Arguments to create many Class_files.
     * @example
     * // Create many Class_files
     * const class_file = await prisma.class_file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends class_fileCreateManyArgs>(args?: SelectSubset<T, class_fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Class_files and returns the data saved in the database.
     * @param {class_fileCreateManyAndReturnArgs} args - Arguments to create many Class_files.
     * @example
     * // Create many Class_files
     * const class_file = await prisma.class_file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Class_files and only return the `file_id`
     * const class_fileWithFile_idOnly = await prisma.class_file.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends class_fileCreateManyAndReturnArgs>(args?: SelectSubset<T, class_fileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class_file.
     * @param {class_fileDeleteArgs} args - Arguments to delete one Class_file.
     * @example
     * // Delete one Class_file
     * const Class_file = await prisma.class_file.delete({
     *   where: {
     *     // ... filter to delete one Class_file
     *   }
     * })
     * 
     */
    delete<T extends class_fileDeleteArgs>(args: SelectSubset<T, class_fileDeleteArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class_file.
     * @param {class_fileUpdateArgs} args - Arguments to update one Class_file.
     * @example
     * // Update one Class_file
     * const class_file = await prisma.class_file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends class_fileUpdateArgs>(args: SelectSubset<T, class_fileUpdateArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Class_files.
     * @param {class_fileDeleteManyArgs} args - Arguments to filter Class_files to delete.
     * @example
     * // Delete a few Class_files
     * const { count } = await prisma.class_file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends class_fileDeleteManyArgs>(args?: SelectSubset<T, class_fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Class_files
     * const class_file = await prisma.class_file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends class_fileUpdateManyArgs>(args: SelectSubset<T, class_fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_files and returns the data updated in the database.
     * @param {class_fileUpdateManyAndReturnArgs} args - Arguments to update many Class_files.
     * @example
     * // Update many Class_files
     * const class_file = await prisma.class_file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Class_files and only return the `file_id`
     * const class_fileWithFile_idOnly = await prisma.class_file.updateManyAndReturn({
     *   select: { file_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends class_fileUpdateManyAndReturnArgs>(args: SelectSubset<T, class_fileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class_file.
     * @param {class_fileUpsertArgs} args - Arguments to update or create a Class_file.
     * @example
     * // Update or create a Class_file
     * const class_file = await prisma.class_file.upsert({
     *   create: {
     *     // ... data to create a Class_file
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class_file we want to update
     *   }
     * })
     */
    upsert<T extends class_fileUpsertArgs>(args: SelectSubset<T, class_fileUpsertArgs<ExtArgs>>): Prisma__class_fileClient<$Result.GetResult<Prisma.$class_filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Class_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_fileCountArgs} args - Arguments to filter Class_files to count.
     * @example
     * // Count the number of Class_files
     * const count = await prisma.class_file.count({
     *   where: {
     *     // ... the filter for the Class_files we want to count
     *   }
     * })
    **/
    count<T extends class_fileCountArgs>(
      args?: Subset<T, class_fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Class_fileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class_file.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_fileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Class_fileAggregateArgs>(args: Subset<T, Class_fileAggregateArgs>): Prisma.PrismaPromise<GetClass_fileAggregateType<T>>

    /**
     * Group by Class_file.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_fileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends class_fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: class_fileGroupByArgs['orderBy'] }
        : { orderBy?: class_fileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, class_fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_fileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the class_file model
   */
  readonly fields: class_fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for class_file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__class_fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Renamedclass<T extends RenamedclassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RenamedclassDefaultArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the class_file model
   */
  interface class_fileFieldRefs {
    readonly file_id: FieldRef<"class_file", 'Int'>
    readonly display_name: FieldRef<"class_file", 'String'>
    readonly storage_path: FieldRef<"class_file", 'String'>
    readonly file_url: FieldRef<"class_file", 'String'>
    readonly file_type: FieldRef<"class_file", 'String'>
    readonly metadata: FieldRef<"class_file", 'Json'>
    readonly class_id: FieldRef<"class_file", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * class_file findUnique
   */
  export type class_fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * Filter, which class_file to fetch.
     */
    where: class_fileWhereUniqueInput
  }

  /**
   * class_file findUniqueOrThrow
   */
  export type class_fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * Filter, which class_file to fetch.
     */
    where: class_fileWhereUniqueInput
  }

  /**
   * class_file findFirst
   */
  export type class_fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * Filter, which class_file to fetch.
     */
    where?: class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_files to fetch.
     */
    orderBy?: class_fileOrderByWithRelationInput | class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for class_files.
     */
    cursor?: class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of class_files.
     */
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * class_file findFirstOrThrow
   */
  export type class_fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * Filter, which class_file to fetch.
     */
    where?: class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_files to fetch.
     */
    orderBy?: class_fileOrderByWithRelationInput | class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for class_files.
     */
    cursor?: class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of class_files.
     */
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * class_file findMany
   */
  export type class_fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * Filter, which class_files to fetch.
     */
    where?: class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_files to fetch.
     */
    orderBy?: class_fileOrderByWithRelationInput | class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing class_files.
     */
    cursor?: class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_files.
     */
    skip?: number
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * class_file create
   */
  export type class_fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * The data needed to create a class_file.
     */
    data: XOR<class_fileCreateInput, class_fileUncheckedCreateInput>
  }

  /**
   * class_file createMany
   */
  export type class_fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many class_files.
     */
    data: class_fileCreateManyInput | class_fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * class_file createManyAndReturn
   */
  export type class_fileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * The data used to create many class_files.
     */
    data: class_fileCreateManyInput | class_fileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * class_file update
   */
  export type class_fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * The data needed to update a class_file.
     */
    data: XOR<class_fileUpdateInput, class_fileUncheckedUpdateInput>
    /**
     * Choose, which class_file to update.
     */
    where: class_fileWhereUniqueInput
  }

  /**
   * class_file updateMany
   */
  export type class_fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update class_files.
     */
    data: XOR<class_fileUpdateManyMutationInput, class_fileUncheckedUpdateManyInput>
    /**
     * Filter which class_files to update
     */
    where?: class_fileWhereInput
    /**
     * Limit how many class_files to update.
     */
    limit?: number
  }

  /**
   * class_file updateManyAndReturn
   */
  export type class_fileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * The data used to update class_files.
     */
    data: XOR<class_fileUpdateManyMutationInput, class_fileUncheckedUpdateManyInput>
    /**
     * Filter which class_files to update
     */
    where?: class_fileWhereInput
    /**
     * Limit how many class_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * class_file upsert
   */
  export type class_fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * The filter to search for the class_file to update in case it exists.
     */
    where: class_fileWhereUniqueInput
    /**
     * In case the class_file found by the `where` argument doesn't exist, create a new class_file with this data.
     */
    create: XOR<class_fileCreateInput, class_fileUncheckedCreateInput>
    /**
     * In case the class_file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<class_fileUpdateInput, class_fileUncheckedUpdateInput>
  }

  /**
   * class_file delete
   */
  export type class_fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
    /**
     * Filter which class_file to delete.
     */
    where: class_fileWhereUniqueInput
  }

  /**
   * class_file deleteMany
   */
  export type class_fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which class_files to delete
     */
    where?: class_fileWhereInput
    /**
     * Limit how many class_files to delete.
     */
    limit?: number
  }

  /**
   * class_file without action
   */
  export type class_fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_file
     */
    select?: class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_file
     */
    omit?: class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_fileInclude<ExtArgs> | null
  }


  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id_course: number | null
  }

  export type CourseSumAggregateOutputType = {
    id_course: number | null
  }

  export type CourseMinAggregateOutputType = {
    id_course: number | null
    title: string | null
    description: string | null
    banner_url: string | null
    slug: string | null
    fk_teacher: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id_course: number | null
    title: string | null
    description: string | null
    banner_url: string | null
    slug: string | null
    fk_teacher: string | null
  }

  export type CourseCountAggregateOutputType = {
    id_course: number
    title: number
    description: number
    banner_url: number
    slug: number
    fk_teacher: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id_course?: true
  }

  export type CourseSumAggregateInputType = {
    id_course?: true
  }

  export type CourseMinAggregateInputType = {
    id_course?: true
    title?: true
    description?: true
    banner_url?: true
    slug?: true
    fk_teacher?: true
  }

  export type CourseMaxAggregateInputType = {
    id_course?: true
    title?: true
    description?: true
    banner_url?: true
    slug?: true
    fk_teacher?: true
  }

  export type CourseCountAggregateInputType = {
    id_course?: true
    title?: true
    description?: true
    banner_url?: true
    slug?: true
    fk_teacher?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id_course: number
    title: string
    description: string
    banner_url: string | null
    slug: string
    fk_teacher: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    enrollments?: boolean | course$enrollmentsArgs<ExtArgs>
    module?: boolean | course$moduleArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_course" | "title" | "description" | "banner_url" | "slug" | "fk_teacher", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    enrollments?: boolean | course$enrollmentsArgs<ExtArgs>
    module?: boolean | course$moduleArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type courseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      enrollments: Prisma.$enrollmentsPayload<ExtArgs>[]
      module: Prisma.$modulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_course: number
      title: string
      description: string
      banner_url: string | null
      slug: string
      fk_teacher: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id_course`
     * const courseWithId_courseOnly = await prisma.course.findMany({ select: { id_course: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {courseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id_course`
     * const courseWithId_courseOnly = await prisma.course.createManyAndReturn({
     *   select: { id_course: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseCreateManyAndReturnArgs>(args?: SelectSubset<T, courseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {courseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id_course`
     * const courseWithId_courseOnly = await prisma.course.updateManyAndReturn({
     *   select: { id_course: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends courseUpdateManyAndReturnArgs>(args: SelectSubset<T, courseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    module<T extends course$moduleArgs<ExtArgs> = {}>(args?: Subset<T, course$moduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id_course: FieldRef<"course", 'Int'>
    readonly title: FieldRef<"course", 'String'>
    readonly description: FieldRef<"course", 'String'>
    readonly banner_url: FieldRef<"course", 'String'>
    readonly slug: FieldRef<"course", 'String'>
    readonly fk_teacher: FieldRef<"course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course createManyAndReturn
   */
  export type courseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course updateManyAndReturn
   */
  export type courseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.enrollments
   */
  export type course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    cursor?: enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * course.module
   */
  export type course$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    cursor?: moduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model enrollments
   */

  export type AggregateEnrollments = {
    _count: EnrollmentsCountAggregateOutputType | null
    _avg: EnrollmentsAvgAggregateOutputType | null
    _sum: EnrollmentsSumAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  export type EnrollmentsAvgAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    course_id: number | null
  }

  export type EnrollmentsSumAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    course_id: number | null
  }

  export type EnrollmentsMinAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    enrolled_at: Date | null
    student_id: string | null
    course_id: number | null
  }

  export type EnrollmentsMaxAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    enrolled_at: Date | null
    student_id: string | null
    course_id: number | null
  }

  export type EnrollmentsCountAggregateOutputType = {
    id_enrollment: number
    progress: number
    enrolled_at: number
    student_id: number
    course_id: number
    _all: number
  }


  export type EnrollmentsAvgAggregateInputType = {
    id_enrollment?: true
    progress?: true
    course_id?: true
  }

  export type EnrollmentsSumAggregateInputType = {
    id_enrollment?: true
    progress?: true
    course_id?: true
  }

  export type EnrollmentsMinAggregateInputType = {
    id_enrollment?: true
    progress?: true
    enrolled_at?: true
    student_id?: true
    course_id?: true
  }

  export type EnrollmentsMaxAggregateInputType = {
    id_enrollment?: true
    progress?: true
    enrolled_at?: true
    student_id?: true
    course_id?: true
  }

  export type EnrollmentsCountAggregateInputType = {
    id_enrollment?: true
    progress?: true
    enrolled_at?: true
    student_id?: true
    course_id?: true
    _all?: true
  }

  export type EnrollmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to aggregate.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollments
    **/
    _count?: true | EnrollmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type GetEnrollmentsAggregateType<T extends EnrollmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollments[P]>
      : GetScalarType<T[P], AggregateEnrollments[P]>
  }




  export type enrollmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithAggregationInput | enrollmentsOrderByWithAggregationInput[]
    by: EnrollmentsScalarFieldEnum[] | EnrollmentsScalarFieldEnum
    having?: enrollmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentsCountAggregateInputType | true
    _avg?: EnrollmentsAvgAggregateInputType
    _sum?: EnrollmentsSumAggregateInputType
    _min?: EnrollmentsMinAggregateInputType
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type EnrollmentsGroupByOutputType = {
    id_enrollment: number
    progress: number | null
    enrolled_at: Date | null
    student_id: string
    course_id: number
    _count: EnrollmentsCountAggregateOutputType | null
    _avg: EnrollmentsAvgAggregateOutputType | null
    _sum: EnrollmentsSumAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  type GetEnrollmentsGroupByPayload<T extends enrollmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
        }
      >
    >


  export type enrollmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectScalar = {
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
  }

  export type enrollmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_enrollment" | "progress" | "enrolled_at" | "student_id" | "course_id", ExtArgs["result"]["enrollments"]>
  export type enrollmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type enrollmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type enrollmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $enrollmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollments"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_enrollment: number
      progress: number | null
      enrolled_at: Date | null
      student_id: string
      course_id: number
    }, ExtArgs["result"]["enrollments"]>
    composites: {}
  }

  type enrollmentsGetPayload<S extends boolean | null | undefined | enrollmentsDefaultArgs> = $Result.GetResult<Prisma.$enrollmentsPayload, S>

  type enrollmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentsCountAggregateInputType | true
    }

  export interface enrollmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollments'], meta: { name: 'enrollments' } }
    /**
     * Find zero or one Enrollments that matches the filter.
     * @param {enrollmentsFindUniqueArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollmentsFindUniqueArgs>(args: SelectSubset<T, enrollmentsFindUniqueArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollmentsFindUniqueOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindFirstArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollmentsFindFirstArgs>(args?: SelectSubset<T, enrollmentsFindFirstArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindFirstOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollments.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollments.findMany({ take: 10 })
     * 
     * // Only select the `id_enrollment`
     * const enrollmentsWithId_enrollmentOnly = await prisma.enrollments.findMany({ select: { id_enrollment: true } })
     * 
     */
    findMany<T extends enrollmentsFindManyArgs>(args?: SelectSubset<T, enrollmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollments.
     * @param {enrollmentsCreateArgs} args - Arguments to create a Enrollments.
     * @example
     * // Create one Enrollments
     * const Enrollments = await prisma.enrollments.create({
     *   data: {
     *     // ... data to create a Enrollments
     *   }
     * })
     * 
     */
    create<T extends enrollmentsCreateArgs>(args: SelectSubset<T, enrollmentsCreateArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {enrollmentsCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollmentsCreateManyArgs>(args?: SelectSubset<T, enrollmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {enrollmentsCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id_enrollment`
     * const enrollmentsWithId_enrollmentOnly = await prisma.enrollments.createManyAndReturn({
     *   select: { id_enrollment: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enrollmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, enrollmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollments.
     * @param {enrollmentsDeleteArgs} args - Arguments to delete one Enrollments.
     * @example
     * // Delete one Enrollments
     * const Enrollments = await prisma.enrollments.delete({
     *   where: {
     *     // ... filter to delete one Enrollments
     *   }
     * })
     * 
     */
    delete<T extends enrollmentsDeleteArgs>(args: SelectSubset<T, enrollmentsDeleteArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollments.
     * @param {enrollmentsUpdateArgs} args - Arguments to update one Enrollments.
     * @example
     * // Update one Enrollments
     * const enrollments = await prisma.enrollments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollmentsUpdateArgs>(args: SelectSubset<T, enrollmentsUpdateArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentsDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollmentsDeleteManyArgs>(args?: SelectSubset<T, enrollmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollmentsUpdateManyArgs>(args: SelectSubset<T, enrollmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {enrollmentsUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id_enrollment`
     * const enrollmentsWithId_enrollmentOnly = await prisma.enrollments.updateManyAndReturn({
     *   select: { id_enrollment: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enrollmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, enrollmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollments.
     * @param {enrollmentsUpsertArgs} args - Arguments to update or create a Enrollments.
     * @example
     * // Update or create a Enrollments
     * const enrollments = await prisma.enrollments.upsert({
     *   create: {
     *     // ... data to create a Enrollments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollments we want to update
     *   }
     * })
     */
    upsert<T extends enrollmentsUpsertArgs>(args: SelectSubset<T, enrollmentsUpsertArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollments.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends enrollmentsCountArgs>(
      args?: Subset<T, enrollmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentsAggregateArgs>(args: Subset<T, EnrollmentsAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentsAggregateType<T>>

    /**
     * Group by Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enrollmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentsGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enrollmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollments model
   */
  readonly fields: enrollmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the enrollments model
   */
  interface enrollmentsFieldRefs {
    readonly id_enrollment: FieldRef<"enrollments", 'Int'>
    readonly progress: FieldRef<"enrollments", 'Int'>
    readonly enrolled_at: FieldRef<"enrollments", 'DateTime'>
    readonly student_id: FieldRef<"enrollments", 'String'>
    readonly course_id: FieldRef<"enrollments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * enrollments findUnique
   */
  export type enrollmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments findUniqueOrThrow
   */
  export type enrollmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments findFirst
   */
  export type enrollmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments findFirstOrThrow
   */
  export type enrollmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments findMany
   */
  export type enrollmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments create
   */
  export type enrollmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollments.
     */
    data: XOR<enrollmentsCreateInput, enrollmentsUncheckedCreateInput>
  }

  /**
   * enrollments createMany
   */
  export type enrollmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentsCreateManyInput | enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enrollments createManyAndReturn
   */
  export type enrollmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentsCreateManyInput | enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollments update
   */
  export type enrollmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollments.
     */
    data: XOR<enrollmentsUpdateInput, enrollmentsUncheckedUpdateInput>
    /**
     * Choose, which enrollments to update.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments updateMany
   */
  export type enrollmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
  }

  /**
   * enrollments updateManyAndReturn
   */
  export type enrollmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollments upsert
   */
  export type enrollmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollments to update in case it exists.
     */
    where: enrollmentsWhereUniqueInput
    /**
     * In case the enrollments found by the `where` argument doesn't exist, create a new enrollments with this data.
     */
    create: XOR<enrollmentsCreateInput, enrollmentsUncheckedCreateInput>
    /**
     * In case the enrollments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentsUpdateInput, enrollmentsUncheckedUpdateInput>
  }

  /**
   * enrollments delete
   */
  export type enrollmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter which enrollments to delete.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments deleteMany
   */
  export type enrollmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to delete.
     */
    limit?: number
  }

  /**
   * enrollments without action
   */
  export type enrollmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
  }


  /**
   * Model module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id_module: number | null
    index_order: number | null
    fk_course: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id_module: number | null
    index_order: number | null
    fk_course: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id_module: number | null
    title: string | null
    description: string | null
    index_order: number | null
    fk_course: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id_module: number | null
    title: string | null
    description: string | null
    index_order: number | null
    fk_course: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id_module: number
    title: number
    description: number
    index_order: number
    fk_course: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id_module?: true
    index_order?: true
    fk_course?: true
  }

  export type ModuleSumAggregateInputType = {
    id_module?: true
    index_order?: true
    fk_course?: true
  }

  export type ModuleMinAggregateInputType = {
    id_module?: true
    title?: true
    description?: true
    index_order?: true
    fk_course?: true
  }

  export type ModuleMaxAggregateInputType = {
    id_module?: true
    title?: true
    description?: true
    index_order?: true
    fk_course?: true
  }

  export type ModuleCountAggregateInputType = {
    id_module?: true
    title?: true
    description?: true
    index_order?: true
    fk_course?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module to aggregate.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithAggregationInput | moduleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: moduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id_module: number
    title: string
    description: string
    index_order: number
    fk_course: number
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
    Renamedclass?: boolean | module$RenamedclassArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectScalar = {
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
  }

  export type moduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_module" | "title" | "description" | "index_order" | "fk_course", ExtArgs["result"]["module"]>
  export type moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | module$RenamedclassArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type moduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type moduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module"
    objects: {
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>[]
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_module: number
      title: string
      description: string
      index_order: number
      fk_course: number
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type moduleGetPayload<S extends boolean | null | undefined | moduleDefaultArgs> = $Result.GetResult<Prisma.$modulePayload, S>

  type moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module'], meta: { name: 'module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {moduleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moduleFindUniqueArgs>(args: SelectSubset<T, moduleFindUniqueArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moduleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moduleFindUniqueOrThrowArgs>(args: SelectSubset<T, moduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moduleFindFirstArgs>(args?: SelectSubset<T, moduleFindFirstArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moduleFindFirstOrThrowArgs>(args?: SelectSubset<T, moduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id_module`
     * const moduleWithId_moduleOnly = await prisma.module.findMany({ select: { id_module: true } })
     * 
     */
    findMany<T extends moduleFindManyArgs>(args?: SelectSubset<T, moduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {moduleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends moduleCreateArgs>(args: SelectSubset<T, moduleCreateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {moduleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moduleCreateManyArgs>(args?: SelectSubset<T, moduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {moduleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id_module`
     * const moduleWithId_moduleOnly = await prisma.module.createManyAndReturn({
     *   select: { id_module: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moduleCreateManyAndReturnArgs>(args?: SelectSubset<T, moduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {moduleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends moduleDeleteArgs>(args: SelectSubset<T, moduleDeleteArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {moduleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moduleUpdateArgs>(args: SelectSubset<T, moduleUpdateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {moduleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moduleDeleteManyArgs>(args?: SelectSubset<T, moduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moduleUpdateManyArgs>(args: SelectSubset<T, moduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {moduleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id_module`
     * const moduleWithId_moduleOnly = await prisma.module.updateManyAndReturn({
     *   select: { id_module: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends moduleUpdateManyAndReturnArgs>(args: SelectSubset<T, moduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {moduleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends moduleUpsertArgs>(args: SelectSubset<T, moduleUpsertArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends moduleCountArgs>(
      args?: Subset<T, moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends moduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleGroupByArgs['orderBy'] }
        : { orderBy?: moduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module model
   */
  readonly fields: moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Renamedclass<T extends module$RenamedclassArgs<ExtArgs> = {}>(args?: Subset<T, module$RenamedclassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the module model
   */
  interface moduleFieldRefs {
    readonly id_module: FieldRef<"module", 'Int'>
    readonly title: FieldRef<"module", 'String'>
    readonly description: FieldRef<"module", 'String'>
    readonly index_order: FieldRef<"module", 'Int'>
    readonly fk_course: FieldRef<"module", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * module findUnique
   */
  export type moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findUniqueOrThrow
   */
  export type moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findFirst
   */
  export type moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findFirstOrThrow
   */
  export type moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findMany
   */
  export type moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module create
   */
  export type moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to create a module.
     */
    data: XOR<moduleCreateInput, moduleUncheckedCreateInput>
  }

  /**
   * module createMany
   */
  export type moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * module createManyAndReturn
   */
  export type moduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * module update
   */
  export type moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to update a module.
     */
    data: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
    /**
     * Choose, which module to update.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module updateMany
   */
  export type moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
  }

  /**
   * module updateManyAndReturn
   */
  export type moduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * module upsert
   */
  export type moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The filter to search for the module to update in case it exists.
     */
    where: moduleWhereUniqueInput
    /**
     * In case the module found by the `where` argument doesn't exist, create a new module with this data.
     */
    create: XOR<moduleCreateInput, moduleUncheckedCreateInput>
    /**
     * In case the module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
  }

  /**
   * module delete
   */
  export type moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter which module to delete.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module deleteMany
   */
  export type moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to delete.
     */
    limit?: number
  }

  /**
   * module.Renamedclass
   */
  export type module$RenamedclassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    where?: RenamedclassWhereInput
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    cursor?: RenamedclassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * module without action
   */
  export type moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
  }


  /**
   * Model student_progress
   */

  export type AggregateStudent_progress = {
    _count: Student_progressCountAggregateOutputType | null
    _avg: Student_progressAvgAggregateOutputType | null
    _sum: Student_progressSumAggregateOutputType | null
    _min: Student_progressMinAggregateOutputType | null
    _max: Student_progressMaxAggregateOutputType | null
  }

  export type Student_progressAvgAggregateOutputType = {
    progress_id: number | null
    class_id: number | null
  }

  export type Student_progressSumAggregateOutputType = {
    progress_id: number | null
    class_id: number | null
  }

  export type Student_progressMinAggregateOutputType = {
    progress_id: number | null
    completed_at: Date | null
    class_id: number | null
    student_id: string | null
  }

  export type Student_progressMaxAggregateOutputType = {
    progress_id: number | null
    completed_at: Date | null
    class_id: number | null
    student_id: string | null
  }

  export type Student_progressCountAggregateOutputType = {
    progress_id: number
    completed_at: number
    class_id: number
    student_id: number
    _all: number
  }


  export type Student_progressAvgAggregateInputType = {
    progress_id?: true
    class_id?: true
  }

  export type Student_progressSumAggregateInputType = {
    progress_id?: true
    class_id?: true
  }

  export type Student_progressMinAggregateInputType = {
    progress_id?: true
    completed_at?: true
    class_id?: true
    student_id?: true
  }

  export type Student_progressMaxAggregateInputType = {
    progress_id?: true
    completed_at?: true
    class_id?: true
    student_id?: true
  }

  export type Student_progressCountAggregateInputType = {
    progress_id?: true
    completed_at?: true
    class_id?: true
    student_id?: true
    _all?: true
  }

  export type Student_progressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_progress to aggregate.
     */
    where?: student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_progresses to fetch.
     */
    orderBy?: student_progressOrderByWithRelationInput | student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_progresses
    **/
    _count?: true | Student_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_progressMaxAggregateInputType
  }

  export type GetStudent_progressAggregateType<T extends Student_progressAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_progress[P]>
      : GetScalarType<T[P], AggregateStudent_progress[P]>
  }




  export type student_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_progressWhereInput
    orderBy?: student_progressOrderByWithAggregationInput | student_progressOrderByWithAggregationInput[]
    by: Student_progressScalarFieldEnum[] | Student_progressScalarFieldEnum
    having?: student_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_progressCountAggregateInputType | true
    _avg?: Student_progressAvgAggregateInputType
    _sum?: Student_progressSumAggregateInputType
    _min?: Student_progressMinAggregateInputType
    _max?: Student_progressMaxAggregateInputType
  }

  export type Student_progressGroupByOutputType = {
    progress_id: number
    completed_at: Date | null
    class_id: number
    student_id: string
    _count: Student_progressCountAggregateOutputType | null
    _avg: Student_progressAvgAggregateOutputType | null
    _sum: Student_progressSumAggregateOutputType | null
    _min: Student_progressMinAggregateOutputType | null
    _max: Student_progressMaxAggregateOutputType | null
  }

  type GetStudent_progressGroupByPayload<T extends student_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_progressGroupByOutputType[P]>
            : GetScalarType<T[P], Student_progressGroupByOutputType[P]>
        }
      >
    >


  export type student_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_progress"]>

  export type student_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_progress"]>

  export type student_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_progress"]>

  export type student_progressSelectScalar = {
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
  }

  export type student_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"progress_id" | "completed_at" | "class_id" | "student_id", ExtArgs["result"]["student_progress"]>
  export type student_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type student_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type student_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $student_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_progress"
    objects: {
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      progress_id: number
      completed_at: Date | null
      class_id: number
      student_id: string
    }, ExtArgs["result"]["student_progress"]>
    composites: {}
  }

  type student_progressGetPayload<S extends boolean | null | undefined | student_progressDefaultArgs> = $Result.GetResult<Prisma.$student_progressPayload, S>

  type student_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_progressCountAggregateInputType | true
    }

  export interface student_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_progress'], meta: { name: 'student_progress' } }
    /**
     * Find zero or one Student_progress that matches the filter.
     * @param {student_progressFindUniqueArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_progressFindUniqueArgs>(args: SelectSubset<T, student_progressFindUniqueArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_progressFindUniqueOrThrowArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, student_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_progressFindFirstArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_progressFindFirstArgs>(args?: SelectSubset<T, student_progressFindFirstArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_progressFindFirstOrThrowArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, student_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_progresses
     * const student_progresses = await prisma.student_progress.findMany()
     * 
     * // Get first 10 Student_progresses
     * const student_progresses = await prisma.student_progress.findMany({ take: 10 })
     * 
     * // Only select the `progress_id`
     * const student_progressWithProgress_idOnly = await prisma.student_progress.findMany({ select: { progress_id: true } })
     * 
     */
    findMany<T extends student_progressFindManyArgs>(args?: SelectSubset<T, student_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_progress.
     * @param {student_progressCreateArgs} args - Arguments to create a Student_progress.
     * @example
     * // Create one Student_progress
     * const Student_progress = await prisma.student_progress.create({
     *   data: {
     *     // ... data to create a Student_progress
     *   }
     * })
     * 
     */
    create<T extends student_progressCreateArgs>(args: SelectSubset<T, student_progressCreateArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_progresses.
     * @param {student_progressCreateManyArgs} args - Arguments to create many Student_progresses.
     * @example
     * // Create many Student_progresses
     * const student_progress = await prisma.student_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_progressCreateManyArgs>(args?: SelectSubset<T, student_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_progresses and returns the data saved in the database.
     * @param {student_progressCreateManyAndReturnArgs} args - Arguments to create many Student_progresses.
     * @example
     * // Create many Student_progresses
     * const student_progress = await prisma.student_progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_progresses and only return the `progress_id`
     * const student_progressWithProgress_idOnly = await prisma.student_progress.createManyAndReturn({
     *   select: { progress_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends student_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, student_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_progress.
     * @param {student_progressDeleteArgs} args - Arguments to delete one Student_progress.
     * @example
     * // Delete one Student_progress
     * const Student_progress = await prisma.student_progress.delete({
     *   where: {
     *     // ... filter to delete one Student_progress
     *   }
     * })
     * 
     */
    delete<T extends student_progressDeleteArgs>(args: SelectSubset<T, student_progressDeleteArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_progress.
     * @param {student_progressUpdateArgs} args - Arguments to update one Student_progress.
     * @example
     * // Update one Student_progress
     * const student_progress = await prisma.student_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_progressUpdateArgs>(args: SelectSubset<T, student_progressUpdateArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_progresses.
     * @param {student_progressDeleteManyArgs} args - Arguments to filter Student_progresses to delete.
     * @example
     * // Delete a few Student_progresses
     * const { count } = await prisma.student_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_progressDeleteManyArgs>(args?: SelectSubset<T, student_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_progresses
     * const student_progress = await prisma.student_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_progressUpdateManyArgs>(args: SelectSubset<T, student_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_progresses and returns the data updated in the database.
     * @param {student_progressUpdateManyAndReturnArgs} args - Arguments to update many Student_progresses.
     * @example
     * // Update many Student_progresses
     * const student_progress = await prisma.student_progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_progresses and only return the `progress_id`
     * const student_progressWithProgress_idOnly = await prisma.student_progress.updateManyAndReturn({
     *   select: { progress_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends student_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, student_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_progress.
     * @param {student_progressUpsertArgs} args - Arguments to update or create a Student_progress.
     * @example
     * // Update or create a Student_progress
     * const student_progress = await prisma.student_progress.upsert({
     *   create: {
     *     // ... data to create a Student_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_progress we want to update
     *   }
     * })
     */
    upsert<T extends student_progressUpsertArgs>(args: SelectSubset<T, student_progressUpsertArgs<ExtArgs>>): Prisma__student_progressClient<$Result.GetResult<Prisma.$student_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_progressCountArgs} args - Arguments to filter Student_progresses to count.
     * @example
     * // Count the number of Student_progresses
     * const count = await prisma.student_progress.count({
     *   where: {
     *     // ... the filter for the Student_progresses we want to count
     *   }
     * })
    **/
    count<T extends student_progressCountArgs>(
      args?: Subset<T, student_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_progressAggregateArgs>(args: Subset<T, Student_progressAggregateArgs>): Prisma.PrismaPromise<GetStudent_progressAggregateType<T>>

    /**
     * Group by Student_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_progressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends student_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_progressGroupByArgs['orderBy'] }
        : { orderBy?: student_progressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, student_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_progress model
   */
  readonly fields: student_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Renamedclass<T extends RenamedclassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RenamedclassDefaultArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student_progress model
   */
  interface student_progressFieldRefs {
    readonly progress_id: FieldRef<"student_progress", 'Int'>
    readonly completed_at: FieldRef<"student_progress", 'DateTime'>
    readonly class_id: FieldRef<"student_progress", 'Int'>
    readonly student_id: FieldRef<"student_progress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student_progress findUnique
   */
  export type student_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * Filter, which student_progress to fetch.
     */
    where: student_progressWhereUniqueInput
  }

  /**
   * student_progress findUniqueOrThrow
   */
  export type student_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * Filter, which student_progress to fetch.
     */
    where: student_progressWhereUniqueInput
  }

  /**
   * student_progress findFirst
   */
  export type student_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * Filter, which student_progress to fetch.
     */
    where?: student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_progresses to fetch.
     */
    orderBy?: student_progressOrderByWithRelationInput | student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_progresses.
     */
    cursor?: student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_progresses.
     */
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * student_progress findFirstOrThrow
   */
  export type student_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * Filter, which student_progress to fetch.
     */
    where?: student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_progresses to fetch.
     */
    orderBy?: student_progressOrderByWithRelationInput | student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_progresses.
     */
    cursor?: student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_progresses.
     */
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * student_progress findMany
   */
  export type student_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * Filter, which student_progresses to fetch.
     */
    where?: student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_progresses to fetch.
     */
    orderBy?: student_progressOrderByWithRelationInput | student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_progresses.
     */
    cursor?: student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_progresses.
     */
    skip?: number
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * student_progress create
   */
  export type student_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a student_progress.
     */
    data: XOR<student_progressCreateInput, student_progressUncheckedCreateInput>
  }

  /**
   * student_progress createMany
   */
  export type student_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_progresses.
     */
    data: student_progressCreateManyInput | student_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_progress createManyAndReturn
   */
  export type student_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * The data used to create many student_progresses.
     */
    data: student_progressCreateManyInput | student_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_progress update
   */
  export type student_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a student_progress.
     */
    data: XOR<student_progressUpdateInput, student_progressUncheckedUpdateInput>
    /**
     * Choose, which student_progress to update.
     */
    where: student_progressWhereUniqueInput
  }

  /**
   * student_progress updateMany
   */
  export type student_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_progresses.
     */
    data: XOR<student_progressUpdateManyMutationInput, student_progressUncheckedUpdateManyInput>
    /**
     * Filter which student_progresses to update
     */
    where?: student_progressWhereInput
    /**
     * Limit how many student_progresses to update.
     */
    limit?: number
  }

  /**
   * student_progress updateManyAndReturn
   */
  export type student_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * The data used to update student_progresses.
     */
    data: XOR<student_progressUpdateManyMutationInput, student_progressUncheckedUpdateManyInput>
    /**
     * Filter which student_progresses to update
     */
    where?: student_progressWhereInput
    /**
     * Limit how many student_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_progress upsert
   */
  export type student_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the student_progress to update in case it exists.
     */
    where: student_progressWhereUniqueInput
    /**
     * In case the student_progress found by the `where` argument doesn't exist, create a new student_progress with this data.
     */
    create: XOR<student_progressCreateInput, student_progressUncheckedCreateInput>
    /**
     * In case the student_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_progressUpdateInput, student_progressUncheckedUpdateInput>
  }

  /**
   * student_progress delete
   */
  export type student_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
    /**
     * Filter which student_progress to delete.
     */
    where: student_progressWhereUniqueInput
  }

  /**
   * student_progress deleteMany
   */
  export type student_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_progresses to delete
     */
    where?: student_progressWhereInput
    /**
     * Limit how many student_progresses to delete.
     */
    limit?: number
  }

  /**
   * student_progress without action
   */
  export type student_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_progress
     */
    select?: student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_progress
     */
    omit?: student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_progressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_uuid: 'user_uuid',
    email: 'email',
    role: 'role',
    password_hash: 'password_hash',
    full_name: 'full_name',
    avatar_url: 'avatar_url',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RenamedclassScalarFieldEnum: {
    class_id: 'class_id',
    title: 'title',
    description: 'description',
    index_order: 'index_order',
    fk_module: 'fk_module'
  };

  export type RenamedclassScalarFieldEnum = (typeof RenamedclassScalarFieldEnum)[keyof typeof RenamedclassScalarFieldEnum]


  export const Class_fileScalarFieldEnum: {
    file_id: 'file_id',
    display_name: 'display_name',
    storage_path: 'storage_path',
    file_url: 'file_url',
    file_type: 'file_type',
    metadata: 'metadata',
    class_id: 'class_id'
  };

  export type Class_fileScalarFieldEnum = (typeof Class_fileScalarFieldEnum)[keyof typeof Class_fileScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id_course: 'id_course',
    title: 'title',
    description: 'description',
    banner_url: 'banner_url',
    slug: 'slug',
    fk_teacher: 'fk_teacher'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrollmentsScalarFieldEnum: {
    id_enrollment: 'id_enrollment',
    progress: 'progress',
    enrolled_at: 'enrolled_at',
    student_id: 'student_id',
    course_id: 'course_id'
  };

  export type EnrollmentsScalarFieldEnum = (typeof EnrollmentsScalarFieldEnum)[keyof typeof EnrollmentsScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id_module: 'id_module',
    title: 'title',
    description: 'description',
    index_order: 'index_order',
    fk_course: 'fk_course'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const Student_progressScalarFieldEnum: {
    progress_id: 'progress_id',
    completed_at: 'completed_at',
    class_id: 'class_id',
    student_id: 'student_id'
  };

  export type Student_progressScalarFieldEnum = (typeof Student_progressScalarFieldEnum)[keyof typeof Student_progressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'user_role_enum'
   */
  export type Enumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum'>
    


  /**
   * Reference to a field of type 'user_role_enum[]'
   */
  export type ListEnumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_uuid?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role?: Enumuser_role_enumFilter<"users"> | $Enums.user_role_enum
    password_hash?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    avatar_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    course?: CourseListRelationFilter
    enrollments?: EnrollmentsListRelationFilter
    student_progress?: Student_progressListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    course?: courseOrderByRelationAggregateInput
    enrollments?: enrollmentsOrderByRelationAggregateInput
    student_progress?: student_progressOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_uuid?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    role?: Enumuser_role_enumFilter<"users"> | $Enums.user_role_enum
    password_hash?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    avatar_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    course?: CourseListRelationFilter
    enrollments?: EnrollmentsListRelationFilter
    student_progress?: Student_progressListRelationFilter
  }, "user_uuid" | "email">

  export type usersOrderByWithAggregationInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_uuid?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role?: Enumuser_role_enumWithAggregatesFilter<"users"> | $Enums.user_role_enum
    password_hash?: StringWithAggregatesFilter<"users"> | string
    full_name?: StringWithAggregatesFilter<"users"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type RenamedclassWhereInput = {
    AND?: RenamedclassWhereInput | RenamedclassWhereInput[]
    OR?: RenamedclassWhereInput[]
    NOT?: RenamedclassWhereInput | RenamedclassWhereInput[]
    class_id?: IntFilter<"Renamedclass"> | number
    title?: StringFilter<"Renamedclass"> | string
    description?: StringFilter<"Renamedclass"> | string
    index_order?: IntFilter<"Renamedclass"> | number
    fk_module?: IntFilter<"Renamedclass"> | number
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    class_file?: Class_fileListRelationFilter
    student_progress?: Student_progressListRelationFilter
  }

  export type RenamedclassOrderByWithRelationInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
    module?: moduleOrderByWithRelationInput
    class_file?: class_fileOrderByRelationAggregateInput
    student_progress?: student_progressOrderByRelationAggregateInput
  }

  export type RenamedclassWhereUniqueInput = Prisma.AtLeast<{
    class_id?: number
    fk_module_index_order?: RenamedclassFk_moduleIndex_orderCompoundUniqueInput
    AND?: RenamedclassWhereInput | RenamedclassWhereInput[]
    OR?: RenamedclassWhereInput[]
    NOT?: RenamedclassWhereInput | RenamedclassWhereInput[]
    title?: StringFilter<"Renamedclass"> | string
    description?: StringFilter<"Renamedclass"> | string
    index_order?: IntFilter<"Renamedclass"> | number
    fk_module?: IntFilter<"Renamedclass"> | number
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    class_file?: Class_fileListRelationFilter
    student_progress?: Student_progressListRelationFilter
  }, "class_id" | "fk_module_index_order">

  export type RenamedclassOrderByWithAggregationInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
    _count?: RenamedclassCountOrderByAggregateInput
    _avg?: RenamedclassAvgOrderByAggregateInput
    _max?: RenamedclassMaxOrderByAggregateInput
    _min?: RenamedclassMinOrderByAggregateInput
    _sum?: RenamedclassSumOrderByAggregateInput
  }

  export type RenamedclassScalarWhereWithAggregatesInput = {
    AND?: RenamedclassScalarWhereWithAggregatesInput | RenamedclassScalarWhereWithAggregatesInput[]
    OR?: RenamedclassScalarWhereWithAggregatesInput[]
    NOT?: RenamedclassScalarWhereWithAggregatesInput | RenamedclassScalarWhereWithAggregatesInput[]
    class_id?: IntWithAggregatesFilter<"Renamedclass"> | number
    title?: StringWithAggregatesFilter<"Renamedclass"> | string
    description?: StringWithAggregatesFilter<"Renamedclass"> | string
    index_order?: IntWithAggregatesFilter<"Renamedclass"> | number
    fk_module?: IntWithAggregatesFilter<"Renamedclass"> | number
  }

  export type class_fileWhereInput = {
    AND?: class_fileWhereInput | class_fileWhereInput[]
    OR?: class_fileWhereInput[]
    NOT?: class_fileWhereInput | class_fileWhereInput[]
    file_id?: IntFilter<"class_file"> | number
    display_name?: StringFilter<"class_file"> | string
    storage_path?: StringFilter<"class_file"> | string
    file_url?: StringNullableFilter<"class_file"> | string | null
    file_type?: StringNullableFilter<"class_file"> | string | null
    metadata?: JsonNullableFilter<"class_file">
    class_id?: IntFilter<"class_file"> | number
    Renamedclass?: XOR<RenamedclassScalarRelationFilter, RenamedclassWhereInput>
  }

  export type class_fileOrderByWithRelationInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    class_id?: SortOrder
    Renamedclass?: RenamedclassOrderByWithRelationInput
  }

  export type class_fileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number
    AND?: class_fileWhereInput | class_fileWhereInput[]
    OR?: class_fileWhereInput[]
    NOT?: class_fileWhereInput | class_fileWhereInput[]
    display_name?: StringFilter<"class_file"> | string
    storage_path?: StringFilter<"class_file"> | string
    file_url?: StringNullableFilter<"class_file"> | string | null
    file_type?: StringNullableFilter<"class_file"> | string | null
    metadata?: JsonNullableFilter<"class_file">
    class_id?: IntFilter<"class_file"> | number
    Renamedclass?: XOR<RenamedclassScalarRelationFilter, RenamedclassWhereInput>
  }, "file_id">

  export type class_fileOrderByWithAggregationInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    class_id?: SortOrder
    _count?: class_fileCountOrderByAggregateInput
    _avg?: class_fileAvgOrderByAggregateInput
    _max?: class_fileMaxOrderByAggregateInput
    _min?: class_fileMinOrderByAggregateInput
    _sum?: class_fileSumOrderByAggregateInput
  }

  export type class_fileScalarWhereWithAggregatesInput = {
    AND?: class_fileScalarWhereWithAggregatesInput | class_fileScalarWhereWithAggregatesInput[]
    OR?: class_fileScalarWhereWithAggregatesInput[]
    NOT?: class_fileScalarWhereWithAggregatesInput | class_fileScalarWhereWithAggregatesInput[]
    file_id?: IntWithAggregatesFilter<"class_file"> | number
    display_name?: StringWithAggregatesFilter<"class_file"> | string
    storage_path?: StringWithAggregatesFilter<"class_file"> | string
    file_url?: StringNullableWithAggregatesFilter<"class_file"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"class_file"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"class_file">
    class_id?: IntWithAggregatesFilter<"class_file"> | number
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id_course?: IntFilter<"course"> | number
    title?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    banner_url?: StringNullableFilter<"course"> | string | null
    slug?: StringFilter<"course"> | string
    fk_teacher?: UuidFilter<"course"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    enrollments?: EnrollmentsListRelationFilter
    module?: ModuleListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrderInput | SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
    users?: usersOrderByWithRelationInput
    enrollments?: enrollmentsOrderByRelationAggregateInput
    module?: moduleOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id_course?: number
    slug?: string
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    title?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    banner_url?: StringNullableFilter<"course"> | string | null
    fk_teacher?: UuidFilter<"course"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    enrollments?: EnrollmentsListRelationFilter
    module?: ModuleListRelationFilter
  }, "id_course" | "slug">

  export type courseOrderByWithAggregationInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrderInput | SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id_course?: IntWithAggregatesFilter<"course"> | number
    title?: StringWithAggregatesFilter<"course"> | string
    description?: StringWithAggregatesFilter<"course"> | string
    banner_url?: StringNullableWithAggregatesFilter<"course"> | string | null
    slug?: StringWithAggregatesFilter<"course"> | string
    fk_teacher?: UuidWithAggregatesFilter<"course"> | string
  }

  export type enrollmentsWhereInput = {
    AND?: enrollmentsWhereInput | enrollmentsWhereInput[]
    OR?: enrollmentsWhereInput[]
    NOT?: enrollmentsWhereInput | enrollmentsWhereInput[]
    id_enrollment?: IntFilter<"enrollments"> | number
    progress?: IntNullableFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    student_id?: UuidFilter<"enrollments"> | string
    course_id?: IntFilter<"enrollments"> | number
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type enrollmentsOrderByWithRelationInput = {
    id_enrollment?: SortOrder
    progress?: SortOrderInput | SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
    course?: courseOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type enrollmentsWhereUniqueInput = Prisma.AtLeast<{
    id_enrollment?: number
    student_id_course_id?: enrollmentsStudent_idCourse_idCompoundUniqueInput
    AND?: enrollmentsWhereInput | enrollmentsWhereInput[]
    OR?: enrollmentsWhereInput[]
    NOT?: enrollmentsWhereInput | enrollmentsWhereInput[]
    progress?: IntNullableFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    student_id?: UuidFilter<"enrollments"> | string
    course_id?: IntFilter<"enrollments"> | number
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_enrollment" | "student_id_course_id">

  export type enrollmentsOrderByWithAggregationInput = {
    id_enrollment?: SortOrder
    progress?: SortOrderInput | SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
    _count?: enrollmentsCountOrderByAggregateInput
    _avg?: enrollmentsAvgOrderByAggregateInput
    _max?: enrollmentsMaxOrderByAggregateInput
    _min?: enrollmentsMinOrderByAggregateInput
    _sum?: enrollmentsSumOrderByAggregateInput
  }

  export type enrollmentsScalarWhereWithAggregatesInput = {
    AND?: enrollmentsScalarWhereWithAggregatesInput | enrollmentsScalarWhereWithAggregatesInput[]
    OR?: enrollmentsScalarWhereWithAggregatesInput[]
    NOT?: enrollmentsScalarWhereWithAggregatesInput | enrollmentsScalarWhereWithAggregatesInput[]
    id_enrollment?: IntWithAggregatesFilter<"enrollments"> | number
    progress?: IntNullableWithAggregatesFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableWithAggregatesFilter<"enrollments"> | Date | string | null
    student_id?: UuidWithAggregatesFilter<"enrollments"> | string
    course_id?: IntWithAggregatesFilter<"enrollments"> | number
  }

  export type moduleWhereInput = {
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    id_module?: IntFilter<"module"> | number
    title?: StringFilter<"module"> | string
    description?: StringFilter<"module"> | string
    index_order?: IntFilter<"module"> | number
    fk_course?: IntFilter<"module"> | number
    Renamedclass?: RenamedclassListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type moduleOrderByWithRelationInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
    Renamedclass?: RenamedclassOrderByRelationAggregateInput
    course?: courseOrderByWithRelationInput
  }

  export type moduleWhereUniqueInput = Prisma.AtLeast<{
    id_module?: number
    fk_course_index_order?: moduleFk_courseIndex_orderCompoundUniqueInput
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    title?: StringFilter<"module"> | string
    description?: StringFilter<"module"> | string
    index_order?: IntFilter<"module"> | number
    fk_course?: IntFilter<"module"> | number
    Renamedclass?: RenamedclassListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id_module" | "fk_course_index_order">

  export type moduleOrderByWithAggregationInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
    _count?: moduleCountOrderByAggregateInput
    _avg?: moduleAvgOrderByAggregateInput
    _max?: moduleMaxOrderByAggregateInput
    _min?: moduleMinOrderByAggregateInput
    _sum?: moduleSumOrderByAggregateInput
  }

  export type moduleScalarWhereWithAggregatesInput = {
    AND?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    OR?: moduleScalarWhereWithAggregatesInput[]
    NOT?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    id_module?: IntWithAggregatesFilter<"module"> | number
    title?: StringWithAggregatesFilter<"module"> | string
    description?: StringWithAggregatesFilter<"module"> | string
    index_order?: IntWithAggregatesFilter<"module"> | number
    fk_course?: IntWithAggregatesFilter<"module"> | number
  }

  export type student_progressWhereInput = {
    AND?: student_progressWhereInput | student_progressWhereInput[]
    OR?: student_progressWhereInput[]
    NOT?: student_progressWhereInput | student_progressWhereInput[]
    progress_id?: IntFilter<"student_progress"> | number
    completed_at?: DateTimeNullableFilter<"student_progress"> | Date | string | null
    class_id?: IntFilter<"student_progress"> | number
    student_id?: UuidFilter<"student_progress"> | string
    Renamedclass?: XOR<RenamedclassScalarRelationFilter, RenamedclassWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type student_progressOrderByWithRelationInput = {
    progress_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
    Renamedclass?: RenamedclassOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type student_progressWhereUniqueInput = Prisma.AtLeast<{
    progress_id?: number
    student_id_class_id?: student_progressStudent_idClass_idCompoundUniqueInput
    AND?: student_progressWhereInput | student_progressWhereInput[]
    OR?: student_progressWhereInput[]
    NOT?: student_progressWhereInput | student_progressWhereInput[]
    completed_at?: DateTimeNullableFilter<"student_progress"> | Date | string | null
    class_id?: IntFilter<"student_progress"> | number
    student_id?: UuidFilter<"student_progress"> | string
    Renamedclass?: XOR<RenamedclassScalarRelationFilter, RenamedclassWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "progress_id" | "student_id_class_id">

  export type student_progressOrderByWithAggregationInput = {
    progress_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
    _count?: student_progressCountOrderByAggregateInput
    _avg?: student_progressAvgOrderByAggregateInput
    _max?: student_progressMaxOrderByAggregateInput
    _min?: student_progressMinOrderByAggregateInput
    _sum?: student_progressSumOrderByAggregateInput
  }

  export type student_progressScalarWhereWithAggregatesInput = {
    AND?: student_progressScalarWhereWithAggregatesInput | student_progressScalarWhereWithAggregatesInput[]
    OR?: student_progressScalarWhereWithAggregatesInput[]
    NOT?: student_progressScalarWhereWithAggregatesInput | student_progressScalarWhereWithAggregatesInput[]
    progress_id?: IntWithAggregatesFilter<"student_progress"> | number
    completed_at?: DateTimeNullableWithAggregatesFilter<"student_progress"> | Date | string | null
    class_id?: IntWithAggregatesFilter<"student_progress"> | number
    student_id?: UuidWithAggregatesFilter<"student_progress"> | string
  }

  export type usersCreateInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    course?: courseCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsCreateNestedManyWithoutUsersInput
    student_progress?: student_progressCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    course?: courseUncheckedCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutUsersInput
    student_progress?: student_progressUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUpdateManyWithoutUsersNestedInput
    student_progress?: student_progressUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUncheckedUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutUsersNestedInput
    student_progress?: student_progressUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenamedclassCreateInput = {
    title: string
    description: string
    index_order: number
    module: moduleCreateNestedOneWithoutRenamedclassInput
    class_file?: class_fileCreateNestedManyWithoutRenamedclassInput
    student_progress?: student_progressCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUncheckedCreateInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
    class_file?: class_fileUncheckedCreateNestedManyWithoutRenamedclassInput
    student_progress?: student_progressUncheckedCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    module?: moduleUpdateOneRequiredWithoutRenamedclassNestedInput
    class_file?: class_fileUpdateManyWithoutRenamedclassNestedInput
    student_progress?: student_progressUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassUncheckedUpdateInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
    class_file?: class_fileUncheckedUpdateManyWithoutRenamedclassNestedInput
    student_progress?: student_progressUncheckedUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassCreateManyInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
  }

  export type RenamedclassUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type RenamedclassUncheckedUpdateManyInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
  }

  export type class_fileCreateInput = {
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Renamedclass: RenamedclassCreateNestedOneWithoutClass_fileInput
  }

  export type class_fileUncheckedCreateInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id: number
  }

  export type class_fileUpdateInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClass_fileNestedInput
  }

  export type class_fileUncheckedUpdateInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type class_fileCreateManyInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id: number
  }

  export type class_fileUpdateManyMutationInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type class_fileUncheckedUpdateManyInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type courseCreateInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    users: usersCreateNestedOneWithoutCourseInput
    enrollments?: enrollmentsCreateNestedManyWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCourseInput
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutCourseNestedInput
    enrollments?: enrollmentsUpdateManyWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCourseNestedInput
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
  }

  export type courseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type courseUncheckedUpdateManyInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentsCreateInput = {
    progress?: number | null
    enrolled_at?: Date | string | null
    course: courseCreateNestedOneWithoutEnrollmentsInput
    users: usersCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
    course_id: number
  }

  export type enrollmentsUpdateInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUpdateOneRequiredWithoutEnrollmentsNestedInput
    users?: usersUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type enrollmentsCreateManyInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
    course_id: number
  }

  export type enrollmentsUpdateManyMutationInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsUncheckedUpdateManyInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type moduleCreateInput = {
    title: string
    description: string
    index_order: number
    Renamedclass?: RenamedclassCreateNestedManyWithoutModuleInput
    course: courseCreateNestedOneWithoutModuleInput
  }

  export type moduleUncheckedCreateInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    fk_course: number
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Renamedclass?: RenamedclassUpdateManyWithoutModuleNestedInput
    course?: courseUpdateOneRequiredWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_course?: IntFieldUpdateOperationsInput | number
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleCreateManyInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    fk_course: number
  }

  export type moduleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type moduleUncheckedUpdateManyInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_course?: IntFieldUpdateOperationsInput | number
  }

  export type student_progressCreateInput = {
    completed_at?: Date | string | null
    Renamedclass: RenamedclassCreateNestedOneWithoutStudent_progressInput
    users: usersCreateNestedOneWithoutStudent_progressInput
  }

  export type student_progressUncheckedCreateInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
    student_id: string
  }

  export type student_progressUpdateInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutStudent_progressNestedInput
    users?: usersUpdateOneRequiredWithoutStudent_progressNestedInput
  }

  export type student_progressUncheckedUpdateInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type student_progressCreateManyInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
    student_id: string
  }

  export type student_progressUpdateManyMutationInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_progressUncheckedUpdateManyInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumuser_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumFilter<$PrismaModel> | $Enums.user_role_enum
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type EnrollmentsListRelationFilter = {
    every?: enrollmentsWhereInput
    some?: enrollmentsWhereInput
    none?: enrollmentsWhereInput
  }

  export type Student_progressListRelationFilter = {
    every?: student_progressWhereInput
    some?: student_progressWhereInput
    none?: student_progressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enrollmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type student_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumuser_role_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumWithAggregatesFilter<$PrismaModel> | $Enums.user_role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_role_enumFilter<$PrismaModel>
    _max?: NestedEnumuser_role_enumFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ModuleScalarRelationFilter = {
    is?: moduleWhereInput
    isNot?: moduleWhereInput
  }

  export type Class_fileListRelationFilter = {
    every?: class_fileWhereInput
    some?: class_fileWhereInput
    none?: class_fileWhereInput
  }

  export type class_fileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenamedclassFk_moduleIndex_orderCompoundUniqueInput = {
    fk_module: number
    index_order: number
  }

  export type RenamedclassCountOrderByAggregateInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type RenamedclassAvgOrderByAggregateInput = {
    class_id?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type RenamedclassMaxOrderByAggregateInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type RenamedclassMinOrderByAggregateInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type RenamedclassSumOrderByAggregateInput = {
    class_id?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RenamedclassScalarRelationFilter = {
    is?: RenamedclassWhereInput
    isNot?: RenamedclassWhereInput
  }

  export type class_fileCountOrderByAggregateInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    metadata?: SortOrder
    class_id?: SortOrder
  }

  export type class_fileAvgOrderByAggregateInput = {
    file_id?: SortOrder
    class_id?: SortOrder
  }

  export type class_fileMaxOrderByAggregateInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    class_id?: SortOrder
  }

  export type class_fileMinOrderByAggregateInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    class_id?: SortOrder
  }

  export type class_fileSumOrderByAggregateInput = {
    file_id?: SortOrder
    class_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: moduleWhereInput
    some?: moduleWhereInput
    none?: moduleWhereInput
  }

  export type moduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseCountOrderByAggregateInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    id_course?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    id_course?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type enrollmentsStudent_idCourse_idCompoundUniqueInput = {
    student_id: string
    course_id: number
  }

  export type enrollmentsCountOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    enrolled_at?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type enrollmentsAvgOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    course_id?: SortOrder
  }

  export type enrollmentsMaxOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    enrolled_at?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type enrollmentsMinOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    enrolled_at?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type enrollmentsSumOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    course_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RenamedclassListRelationFilter = {
    every?: RenamedclassWhereInput
    some?: RenamedclassWhereInput
    none?: RenamedclassWhereInput
  }

  export type RenamedclassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleFk_courseIndex_orderCompoundUniqueInput = {
    fk_course: number
    index_order: number
  }

  export type moduleCountOrderByAggregateInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type moduleAvgOrderByAggregateInput = {
    id_module?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type moduleMaxOrderByAggregateInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type moduleMinOrderByAggregateInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type moduleSumOrderByAggregateInput = {
    id_module?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type student_progressStudent_idClass_idCompoundUniqueInput = {
    student_id: string
    class_id: number
  }

  export type student_progressCountOrderByAggregateInput = {
    progress_id?: SortOrder
    completed_at?: SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
  }

  export type student_progressAvgOrderByAggregateInput = {
    progress_id?: SortOrder
    class_id?: SortOrder
  }

  export type student_progressMaxOrderByAggregateInput = {
    progress_id?: SortOrder
    completed_at?: SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
  }

  export type student_progressMinOrderByAggregateInput = {
    progress_id?: SortOrder
    completed_at?: SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
  }

  export type student_progressSumOrderByAggregateInput = {
    progress_id?: SortOrder
    class_id?: SortOrder
  }

  export type courseCreateNestedManyWithoutUsersInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type enrollmentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type student_progressCreateNestedManyWithoutUsersInput = {
    create?: XOR<student_progressCreateWithoutUsersInput, student_progressUncheckedCreateWithoutUsersInput> | student_progressCreateWithoutUsersInput[] | student_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutUsersInput | student_progressCreateOrConnectWithoutUsersInput[]
    createMany?: student_progressCreateManyUsersInputEnvelope
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type enrollmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type student_progressUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<student_progressCreateWithoutUsersInput, student_progressUncheckedCreateWithoutUsersInput> | student_progressCreateWithoutUsersInput[] | student_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutUsersInput | student_progressCreateOrConnectWithoutUsersInput[]
    createMany?: student_progressCreateManyUsersInputEnvelope
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumuser_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_role_enum
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type courseUpdateManyWithoutUsersNestedInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutUsersInput | courseUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutUsersInput | courseUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: courseUpdateManyWithWhereWithoutUsersInput | courseUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type enrollmentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutUsersInput | enrollmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutUsersInput | enrollmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutUsersInput | enrollmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type student_progressUpdateManyWithoutUsersNestedInput = {
    create?: XOR<student_progressCreateWithoutUsersInput, student_progressUncheckedCreateWithoutUsersInput> | student_progressCreateWithoutUsersInput[] | student_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutUsersInput | student_progressCreateOrConnectWithoutUsersInput[]
    upsert?: student_progressUpsertWithWhereUniqueWithoutUsersInput | student_progressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: student_progressCreateManyUsersInputEnvelope
    set?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    disconnect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    delete?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    update?: student_progressUpdateWithWhereUniqueWithoutUsersInput | student_progressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: student_progressUpdateManyWithWhereWithoutUsersInput | student_progressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: student_progressScalarWhereInput | student_progressScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutUsersInput | courseUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutUsersInput | courseUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: courseUpdateManyWithWhereWithoutUsersInput | courseUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type enrollmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutUsersInput | enrollmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutUsersInput | enrollmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutUsersInput | enrollmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type student_progressUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<student_progressCreateWithoutUsersInput, student_progressUncheckedCreateWithoutUsersInput> | student_progressCreateWithoutUsersInput[] | student_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutUsersInput | student_progressCreateOrConnectWithoutUsersInput[]
    upsert?: student_progressUpsertWithWhereUniqueWithoutUsersInput | student_progressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: student_progressCreateManyUsersInputEnvelope
    set?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    disconnect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    delete?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    update?: student_progressUpdateWithWhereUniqueWithoutUsersInput | student_progressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: student_progressUpdateManyWithWhereWithoutUsersInput | student_progressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: student_progressScalarWhereInput | student_progressScalarWhereInput[]
  }

  export type moduleCreateNestedOneWithoutRenamedclassInput = {
    create?: XOR<moduleCreateWithoutRenamedclassInput, moduleUncheckedCreateWithoutRenamedclassInput>
    connectOrCreate?: moduleCreateOrConnectWithoutRenamedclassInput
    connect?: moduleWhereUniqueInput
  }

  export type class_fileCreateNestedManyWithoutRenamedclassInput = {
    create?: XOR<class_fileCreateWithoutRenamedclassInput, class_fileUncheckedCreateWithoutRenamedclassInput> | class_fileCreateWithoutRenamedclassInput[] | class_fileUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: class_fileCreateOrConnectWithoutRenamedclassInput | class_fileCreateOrConnectWithoutRenamedclassInput[]
    createMany?: class_fileCreateManyRenamedclassInputEnvelope
    connect?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
  }

  export type student_progressCreateNestedManyWithoutRenamedclassInput = {
    create?: XOR<student_progressCreateWithoutRenamedclassInput, student_progressUncheckedCreateWithoutRenamedclassInput> | student_progressCreateWithoutRenamedclassInput[] | student_progressUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutRenamedclassInput | student_progressCreateOrConnectWithoutRenamedclassInput[]
    createMany?: student_progressCreateManyRenamedclassInputEnvelope
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
  }

  export type class_fileUncheckedCreateNestedManyWithoutRenamedclassInput = {
    create?: XOR<class_fileCreateWithoutRenamedclassInput, class_fileUncheckedCreateWithoutRenamedclassInput> | class_fileCreateWithoutRenamedclassInput[] | class_fileUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: class_fileCreateOrConnectWithoutRenamedclassInput | class_fileCreateOrConnectWithoutRenamedclassInput[]
    createMany?: class_fileCreateManyRenamedclassInputEnvelope
    connect?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
  }

  export type student_progressUncheckedCreateNestedManyWithoutRenamedclassInput = {
    create?: XOR<student_progressCreateWithoutRenamedclassInput, student_progressUncheckedCreateWithoutRenamedclassInput> | student_progressCreateWithoutRenamedclassInput[] | student_progressUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutRenamedclassInput | student_progressCreateOrConnectWithoutRenamedclassInput[]
    createMany?: student_progressCreateManyRenamedclassInputEnvelope
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type moduleUpdateOneRequiredWithoutRenamedclassNestedInput = {
    create?: XOR<moduleCreateWithoutRenamedclassInput, moduleUncheckedCreateWithoutRenamedclassInput>
    connectOrCreate?: moduleCreateOrConnectWithoutRenamedclassInput
    upsert?: moduleUpsertWithoutRenamedclassInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutRenamedclassInput, moduleUpdateWithoutRenamedclassInput>, moduleUncheckedUpdateWithoutRenamedclassInput>
  }

  export type class_fileUpdateManyWithoutRenamedclassNestedInput = {
    create?: XOR<class_fileCreateWithoutRenamedclassInput, class_fileUncheckedCreateWithoutRenamedclassInput> | class_fileCreateWithoutRenamedclassInput[] | class_fileUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: class_fileCreateOrConnectWithoutRenamedclassInput | class_fileCreateOrConnectWithoutRenamedclassInput[]
    upsert?: class_fileUpsertWithWhereUniqueWithoutRenamedclassInput | class_fileUpsertWithWhereUniqueWithoutRenamedclassInput[]
    createMany?: class_fileCreateManyRenamedclassInputEnvelope
    set?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    disconnect?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    delete?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    connect?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    update?: class_fileUpdateWithWhereUniqueWithoutRenamedclassInput | class_fileUpdateWithWhereUniqueWithoutRenamedclassInput[]
    updateMany?: class_fileUpdateManyWithWhereWithoutRenamedclassInput | class_fileUpdateManyWithWhereWithoutRenamedclassInput[]
    deleteMany?: class_fileScalarWhereInput | class_fileScalarWhereInput[]
  }

  export type student_progressUpdateManyWithoutRenamedclassNestedInput = {
    create?: XOR<student_progressCreateWithoutRenamedclassInput, student_progressUncheckedCreateWithoutRenamedclassInput> | student_progressCreateWithoutRenamedclassInput[] | student_progressUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutRenamedclassInput | student_progressCreateOrConnectWithoutRenamedclassInput[]
    upsert?: student_progressUpsertWithWhereUniqueWithoutRenamedclassInput | student_progressUpsertWithWhereUniqueWithoutRenamedclassInput[]
    createMany?: student_progressCreateManyRenamedclassInputEnvelope
    set?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    disconnect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    delete?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    update?: student_progressUpdateWithWhereUniqueWithoutRenamedclassInput | student_progressUpdateWithWhereUniqueWithoutRenamedclassInput[]
    updateMany?: student_progressUpdateManyWithWhereWithoutRenamedclassInput | student_progressUpdateManyWithWhereWithoutRenamedclassInput[]
    deleteMany?: student_progressScalarWhereInput | student_progressScalarWhereInput[]
  }

  export type class_fileUncheckedUpdateManyWithoutRenamedclassNestedInput = {
    create?: XOR<class_fileCreateWithoutRenamedclassInput, class_fileUncheckedCreateWithoutRenamedclassInput> | class_fileCreateWithoutRenamedclassInput[] | class_fileUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: class_fileCreateOrConnectWithoutRenamedclassInput | class_fileCreateOrConnectWithoutRenamedclassInput[]
    upsert?: class_fileUpsertWithWhereUniqueWithoutRenamedclassInput | class_fileUpsertWithWhereUniqueWithoutRenamedclassInput[]
    createMany?: class_fileCreateManyRenamedclassInputEnvelope
    set?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    disconnect?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    delete?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    connect?: class_fileWhereUniqueInput | class_fileWhereUniqueInput[]
    update?: class_fileUpdateWithWhereUniqueWithoutRenamedclassInput | class_fileUpdateWithWhereUniqueWithoutRenamedclassInput[]
    updateMany?: class_fileUpdateManyWithWhereWithoutRenamedclassInput | class_fileUpdateManyWithWhereWithoutRenamedclassInput[]
    deleteMany?: class_fileScalarWhereInput | class_fileScalarWhereInput[]
  }

  export type student_progressUncheckedUpdateManyWithoutRenamedclassNestedInput = {
    create?: XOR<student_progressCreateWithoutRenamedclassInput, student_progressUncheckedCreateWithoutRenamedclassInput> | student_progressCreateWithoutRenamedclassInput[] | student_progressUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: student_progressCreateOrConnectWithoutRenamedclassInput | student_progressCreateOrConnectWithoutRenamedclassInput[]
    upsert?: student_progressUpsertWithWhereUniqueWithoutRenamedclassInput | student_progressUpsertWithWhereUniqueWithoutRenamedclassInput[]
    createMany?: student_progressCreateManyRenamedclassInputEnvelope
    set?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    disconnect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    delete?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    connect?: student_progressWhereUniqueInput | student_progressWhereUniqueInput[]
    update?: student_progressUpdateWithWhereUniqueWithoutRenamedclassInput | student_progressUpdateWithWhereUniqueWithoutRenamedclassInput[]
    updateMany?: student_progressUpdateManyWithWhereWithoutRenamedclassInput | student_progressUpdateManyWithWhereWithoutRenamedclassInput[]
    deleteMany?: student_progressScalarWhereInput | student_progressScalarWhereInput[]
  }

  export type RenamedclassCreateNestedOneWithoutClass_fileInput = {
    create?: XOR<RenamedclassCreateWithoutClass_fileInput, RenamedclassUncheckedCreateWithoutClass_fileInput>
    connectOrCreate?: RenamedclassCreateOrConnectWithoutClass_fileInput
    connect?: RenamedclassWhereUniqueInput
  }

  export type RenamedclassUpdateOneRequiredWithoutClass_fileNestedInput = {
    create?: XOR<RenamedclassCreateWithoutClass_fileInput, RenamedclassUncheckedCreateWithoutClass_fileInput>
    connectOrCreate?: RenamedclassCreateOrConnectWithoutClass_fileInput
    upsert?: RenamedclassUpsertWithoutClass_fileInput
    connect?: RenamedclassWhereUniqueInput
    update?: XOR<XOR<RenamedclassUpdateToOneWithWhereWithoutClass_fileInput, RenamedclassUpdateWithoutClass_fileInput>, RenamedclassUncheckedUpdateWithoutClass_fileInput>
  }

  export type usersCreateNestedOneWithoutCourseInput = {
    create?: XOR<usersCreateWithoutCourseInput, usersUncheckedCreateWithoutCourseInput>
    connectOrCreate?: usersCreateOrConnectWithoutCourseInput
    connect?: usersWhereUniqueInput
  }

  export type enrollmentsCreateNestedManyWithoutCourseInput = {
    create?: XOR<enrollmentsCreateWithoutCourseInput, enrollmentsUncheckedCreateWithoutCourseInput> | enrollmentsCreateWithoutCourseInput[] | enrollmentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCourseInput | enrollmentsCreateOrConnectWithoutCourseInput[]
    createMany?: enrollmentsCreateManyCourseInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type moduleCreateNestedManyWithoutCourseInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type enrollmentsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<enrollmentsCreateWithoutCourseInput, enrollmentsUncheckedCreateWithoutCourseInput> | enrollmentsCreateWithoutCourseInput[] | enrollmentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCourseInput | enrollmentsCreateOrConnectWithoutCourseInput[]
    createMany?: enrollmentsCreateManyCourseInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type moduleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<usersCreateWithoutCourseInput, usersUncheckedCreateWithoutCourseInput>
    connectOrCreate?: usersCreateOrConnectWithoutCourseInput
    upsert?: usersUpsertWithoutCourseInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCourseInput, usersUpdateWithoutCourseInput>, usersUncheckedUpdateWithoutCourseInput>
  }

  export type enrollmentsUpdateManyWithoutCourseNestedInput = {
    create?: XOR<enrollmentsCreateWithoutCourseInput, enrollmentsUncheckedCreateWithoutCourseInput> | enrollmentsCreateWithoutCourseInput[] | enrollmentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCourseInput | enrollmentsCreateOrConnectWithoutCourseInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutCourseInput | enrollmentsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: enrollmentsCreateManyCourseInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutCourseInput | enrollmentsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutCourseInput | enrollmentsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type moduleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutCourseInput | moduleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutCourseInput | moduleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutCourseInput | moduleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type enrollmentsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<enrollmentsCreateWithoutCourseInput, enrollmentsUncheckedCreateWithoutCourseInput> | enrollmentsCreateWithoutCourseInput[] | enrollmentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCourseInput | enrollmentsCreateOrConnectWithoutCourseInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutCourseInput | enrollmentsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: enrollmentsCreateManyCourseInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutCourseInput | enrollmentsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutCourseInput | enrollmentsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type moduleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutCourseInput | moduleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutCourseInput | moduleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutCourseInput | moduleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type courseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentsInput
    connect?: courseWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEnrollmentsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type courseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentsInput
    upsert?: courseUpsertWithoutEnrollmentsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutEnrollmentsInput, courseUpdateWithoutEnrollmentsInput>, courseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type usersUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEnrollmentsInput
    upsert?: usersUpsertWithoutEnrollmentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEnrollmentsInput, usersUpdateWithoutEnrollmentsInput>, usersUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type RenamedclassCreateNestedManyWithoutModuleInput = {
    create?: XOR<RenamedclassCreateWithoutModuleInput, RenamedclassUncheckedCreateWithoutModuleInput> | RenamedclassCreateWithoutModuleInput[] | RenamedclassUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: RenamedclassCreateOrConnectWithoutModuleInput | RenamedclassCreateOrConnectWithoutModuleInput[]
    createMany?: RenamedclassCreateManyModuleInputEnvelope
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
  }

  export type courseCreateNestedOneWithoutModuleInput = {
    create?: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: courseCreateOrConnectWithoutModuleInput
    connect?: courseWhereUniqueInput
  }

  export type RenamedclassUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<RenamedclassCreateWithoutModuleInput, RenamedclassUncheckedCreateWithoutModuleInput> | RenamedclassCreateWithoutModuleInput[] | RenamedclassUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: RenamedclassCreateOrConnectWithoutModuleInput | RenamedclassCreateOrConnectWithoutModuleInput[]
    createMany?: RenamedclassCreateManyModuleInputEnvelope
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
  }

  export type RenamedclassUpdateManyWithoutModuleNestedInput = {
    create?: XOR<RenamedclassCreateWithoutModuleInput, RenamedclassUncheckedCreateWithoutModuleInput> | RenamedclassCreateWithoutModuleInput[] | RenamedclassUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: RenamedclassCreateOrConnectWithoutModuleInput | RenamedclassCreateOrConnectWithoutModuleInput[]
    upsert?: RenamedclassUpsertWithWhereUniqueWithoutModuleInput | RenamedclassUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: RenamedclassCreateManyModuleInputEnvelope
    set?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    disconnect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    delete?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    update?: RenamedclassUpdateWithWhereUniqueWithoutModuleInput | RenamedclassUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: RenamedclassUpdateManyWithWhereWithoutModuleInput | RenamedclassUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[]
  }

  export type courseUpdateOneRequiredWithoutModuleNestedInput = {
    create?: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: courseCreateOrConnectWithoutModuleInput
    upsert?: courseUpsertWithoutModuleInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutModuleInput, courseUpdateWithoutModuleInput>, courseUncheckedUpdateWithoutModuleInput>
  }

  export type RenamedclassUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<RenamedclassCreateWithoutModuleInput, RenamedclassUncheckedCreateWithoutModuleInput> | RenamedclassCreateWithoutModuleInput[] | RenamedclassUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: RenamedclassCreateOrConnectWithoutModuleInput | RenamedclassCreateOrConnectWithoutModuleInput[]
    upsert?: RenamedclassUpsertWithWhereUniqueWithoutModuleInput | RenamedclassUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: RenamedclassCreateManyModuleInputEnvelope
    set?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    disconnect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    delete?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[]
    update?: RenamedclassUpdateWithWhereUniqueWithoutModuleInput | RenamedclassUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: RenamedclassUpdateManyWithWhereWithoutModuleInput | RenamedclassUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[]
  }

  export type RenamedclassCreateNestedOneWithoutStudent_progressInput = {
    create?: XOR<RenamedclassCreateWithoutStudent_progressInput, RenamedclassUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: RenamedclassCreateOrConnectWithoutStudent_progressInput
    connect?: RenamedclassWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutStudent_progressInput = {
    create?: XOR<usersCreateWithoutStudent_progressInput, usersUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: usersCreateOrConnectWithoutStudent_progressInput
    connect?: usersWhereUniqueInput
  }

  export type RenamedclassUpdateOneRequiredWithoutStudent_progressNestedInput = {
    create?: XOR<RenamedclassCreateWithoutStudent_progressInput, RenamedclassUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: RenamedclassCreateOrConnectWithoutStudent_progressInput
    upsert?: RenamedclassUpsertWithoutStudent_progressInput
    connect?: RenamedclassWhereUniqueInput
    update?: XOR<XOR<RenamedclassUpdateToOneWithWhereWithoutStudent_progressInput, RenamedclassUpdateWithoutStudent_progressInput>, RenamedclassUncheckedUpdateWithoutStudent_progressInput>
  }

  export type usersUpdateOneRequiredWithoutStudent_progressNestedInput = {
    create?: XOR<usersCreateWithoutStudent_progressInput, usersUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: usersCreateOrConnectWithoutStudent_progressInput
    upsert?: usersUpsertWithoutStudent_progressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStudent_progressInput, usersUpdateWithoutStudent_progressInput>, usersUncheckedUpdateWithoutStudent_progressInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumuser_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumFilter<$PrismaModel> | $Enums.user_role_enum
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumuser_role_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumWithAggregatesFilter<$PrismaModel> | $Enums.user_role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_role_enumFilter<$PrismaModel>
    _max?: NestedEnumuser_role_enumFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type courseCreateWithoutUsersInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    enrollments?: enrollmentsCreateNestedManyWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutUsersInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCourseInput
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutUsersInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput>
  }

  export type courseCreateManyUsersInputEnvelope = {
    data: courseCreateManyUsersInput | courseCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentsCreateWithoutUsersInput = {
    progress?: number | null
    enrolled_at?: Date | string | null
    course: courseCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateWithoutUsersInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    course_id: number
  }

  export type enrollmentsCreateOrConnectWithoutUsersInput = {
    where: enrollmentsWhereUniqueInput
    create: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput>
  }

  export type enrollmentsCreateManyUsersInputEnvelope = {
    data: enrollmentsCreateManyUsersInput | enrollmentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type student_progressCreateWithoutUsersInput = {
    completed_at?: Date | string | null
    Renamedclass: RenamedclassCreateNestedOneWithoutStudent_progressInput
  }

  export type student_progressUncheckedCreateWithoutUsersInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
  }

  export type student_progressCreateOrConnectWithoutUsersInput = {
    where: student_progressWhereUniqueInput
    create: XOR<student_progressCreateWithoutUsersInput, student_progressUncheckedCreateWithoutUsersInput>
  }

  export type student_progressCreateManyUsersInputEnvelope = {
    data: student_progressCreateManyUsersInput | student_progressCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithWhereUniqueWithoutUsersInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutUsersInput, courseUncheckedUpdateWithoutUsersInput>
    create: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput>
  }

  export type courseUpdateWithWhereUniqueWithoutUsersInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutUsersInput, courseUncheckedUpdateWithoutUsersInput>
  }

  export type courseUpdateManyWithWhereWithoutUsersInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutUsersInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    id_course?: IntFilter<"course"> | number
    title?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    banner_url?: StringNullableFilter<"course"> | string | null
    slug?: StringFilter<"course"> | string
    fk_teacher?: UuidFilter<"course"> | string
  }

  export type enrollmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: enrollmentsWhereUniqueInput
    update: XOR<enrollmentsUpdateWithoutUsersInput, enrollmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput>
  }

  export type enrollmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: enrollmentsWhereUniqueInput
    data: XOR<enrollmentsUpdateWithoutUsersInput, enrollmentsUncheckedUpdateWithoutUsersInput>
  }

  export type enrollmentsUpdateManyWithWhereWithoutUsersInput = {
    where: enrollmentsScalarWhereInput
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type enrollmentsScalarWhereInput = {
    AND?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
    OR?: enrollmentsScalarWhereInput[]
    NOT?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
    id_enrollment?: IntFilter<"enrollments"> | number
    progress?: IntNullableFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    student_id?: UuidFilter<"enrollments"> | string
    course_id?: IntFilter<"enrollments"> | number
  }

  export type student_progressUpsertWithWhereUniqueWithoutUsersInput = {
    where: student_progressWhereUniqueInput
    update: XOR<student_progressUpdateWithoutUsersInput, student_progressUncheckedUpdateWithoutUsersInput>
    create: XOR<student_progressCreateWithoutUsersInput, student_progressUncheckedCreateWithoutUsersInput>
  }

  export type student_progressUpdateWithWhereUniqueWithoutUsersInput = {
    where: student_progressWhereUniqueInput
    data: XOR<student_progressUpdateWithoutUsersInput, student_progressUncheckedUpdateWithoutUsersInput>
  }

  export type student_progressUpdateManyWithWhereWithoutUsersInput = {
    where: student_progressScalarWhereInput
    data: XOR<student_progressUpdateManyMutationInput, student_progressUncheckedUpdateManyWithoutUsersInput>
  }

  export type student_progressScalarWhereInput = {
    AND?: student_progressScalarWhereInput | student_progressScalarWhereInput[]
    OR?: student_progressScalarWhereInput[]
    NOT?: student_progressScalarWhereInput | student_progressScalarWhereInput[]
    progress_id?: IntFilter<"student_progress"> | number
    completed_at?: DateTimeNullableFilter<"student_progress"> | Date | string | null
    class_id?: IntFilter<"student_progress"> | number
    student_id?: UuidFilter<"student_progress"> | string
  }

  export type moduleCreateWithoutRenamedclassInput = {
    title: string
    description: string
    index_order: number
    course: courseCreateNestedOneWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutRenamedclassInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    fk_course: number
  }

  export type moduleCreateOrConnectWithoutRenamedclassInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutRenamedclassInput, moduleUncheckedCreateWithoutRenamedclassInput>
  }

  export type class_fileCreateWithoutRenamedclassInput = {
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type class_fileUncheckedCreateWithoutRenamedclassInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type class_fileCreateOrConnectWithoutRenamedclassInput = {
    where: class_fileWhereUniqueInput
    create: XOR<class_fileCreateWithoutRenamedclassInput, class_fileUncheckedCreateWithoutRenamedclassInput>
  }

  export type class_fileCreateManyRenamedclassInputEnvelope = {
    data: class_fileCreateManyRenamedclassInput | class_fileCreateManyRenamedclassInput[]
    skipDuplicates?: boolean
  }

  export type student_progressCreateWithoutRenamedclassInput = {
    completed_at?: Date | string | null
    users: usersCreateNestedOneWithoutStudent_progressInput
  }

  export type student_progressUncheckedCreateWithoutRenamedclassInput = {
    progress_id?: number
    completed_at?: Date | string | null
    student_id: string
  }

  export type student_progressCreateOrConnectWithoutRenamedclassInput = {
    where: student_progressWhereUniqueInput
    create: XOR<student_progressCreateWithoutRenamedclassInput, student_progressUncheckedCreateWithoutRenamedclassInput>
  }

  export type student_progressCreateManyRenamedclassInputEnvelope = {
    data: student_progressCreateManyRenamedclassInput | student_progressCreateManyRenamedclassInput[]
    skipDuplicates?: boolean
  }

  export type moduleUpsertWithoutRenamedclassInput = {
    update: XOR<moduleUpdateWithoutRenamedclassInput, moduleUncheckedUpdateWithoutRenamedclassInput>
    create: XOR<moduleCreateWithoutRenamedclassInput, moduleUncheckedCreateWithoutRenamedclassInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutRenamedclassInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutRenamedclassInput, moduleUncheckedUpdateWithoutRenamedclassInput>
  }

  export type moduleUpdateWithoutRenamedclassInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    course?: courseUpdateOneRequiredWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutRenamedclassInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_course?: IntFieldUpdateOperationsInput | number
  }

  export type class_fileUpsertWithWhereUniqueWithoutRenamedclassInput = {
    where: class_fileWhereUniqueInput
    update: XOR<class_fileUpdateWithoutRenamedclassInput, class_fileUncheckedUpdateWithoutRenamedclassInput>
    create: XOR<class_fileCreateWithoutRenamedclassInput, class_fileUncheckedCreateWithoutRenamedclassInput>
  }

  export type class_fileUpdateWithWhereUniqueWithoutRenamedclassInput = {
    where: class_fileWhereUniqueInput
    data: XOR<class_fileUpdateWithoutRenamedclassInput, class_fileUncheckedUpdateWithoutRenamedclassInput>
  }

  export type class_fileUpdateManyWithWhereWithoutRenamedclassInput = {
    where: class_fileScalarWhereInput
    data: XOR<class_fileUpdateManyMutationInput, class_fileUncheckedUpdateManyWithoutRenamedclassInput>
  }

  export type class_fileScalarWhereInput = {
    AND?: class_fileScalarWhereInput | class_fileScalarWhereInput[]
    OR?: class_fileScalarWhereInput[]
    NOT?: class_fileScalarWhereInput | class_fileScalarWhereInput[]
    file_id?: IntFilter<"class_file"> | number
    display_name?: StringFilter<"class_file"> | string
    storage_path?: StringFilter<"class_file"> | string
    file_url?: StringNullableFilter<"class_file"> | string | null
    file_type?: StringNullableFilter<"class_file"> | string | null
    metadata?: JsonNullableFilter<"class_file">
    class_id?: IntFilter<"class_file"> | number
  }

  export type student_progressUpsertWithWhereUniqueWithoutRenamedclassInput = {
    where: student_progressWhereUniqueInput
    update: XOR<student_progressUpdateWithoutRenamedclassInput, student_progressUncheckedUpdateWithoutRenamedclassInput>
    create: XOR<student_progressCreateWithoutRenamedclassInput, student_progressUncheckedCreateWithoutRenamedclassInput>
  }

  export type student_progressUpdateWithWhereUniqueWithoutRenamedclassInput = {
    where: student_progressWhereUniqueInput
    data: XOR<student_progressUpdateWithoutRenamedclassInput, student_progressUncheckedUpdateWithoutRenamedclassInput>
  }

  export type student_progressUpdateManyWithWhereWithoutRenamedclassInput = {
    where: student_progressScalarWhereInput
    data: XOR<student_progressUpdateManyMutationInput, student_progressUncheckedUpdateManyWithoutRenamedclassInput>
  }

  export type RenamedclassCreateWithoutClass_fileInput = {
    title: string
    description: string
    index_order: number
    module: moduleCreateNestedOneWithoutRenamedclassInput
    student_progress?: student_progressCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUncheckedCreateWithoutClass_fileInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
    student_progress?: student_progressUncheckedCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassCreateOrConnectWithoutClass_fileInput = {
    where: RenamedclassWhereUniqueInput
    create: XOR<RenamedclassCreateWithoutClass_fileInput, RenamedclassUncheckedCreateWithoutClass_fileInput>
  }

  export type RenamedclassUpsertWithoutClass_fileInput = {
    update: XOR<RenamedclassUpdateWithoutClass_fileInput, RenamedclassUncheckedUpdateWithoutClass_fileInput>
    create: XOR<RenamedclassCreateWithoutClass_fileInput, RenamedclassUncheckedCreateWithoutClass_fileInput>
    where?: RenamedclassWhereInput
  }

  export type RenamedclassUpdateToOneWithWhereWithoutClass_fileInput = {
    where?: RenamedclassWhereInput
    data: XOR<RenamedclassUpdateWithoutClass_fileInput, RenamedclassUncheckedUpdateWithoutClass_fileInput>
  }

  export type RenamedclassUpdateWithoutClass_fileInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    module?: moduleUpdateOneRequiredWithoutRenamedclassNestedInput
    student_progress?: student_progressUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassUncheckedUpdateWithoutClass_fileInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
    student_progress?: student_progressUncheckedUpdateManyWithoutRenamedclassNestedInput
  }

  export type usersCreateWithoutCourseInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    enrollments?: enrollmentsCreateNestedManyWithoutUsersInput
    student_progress?: student_progressCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCourseInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutUsersInput
    student_progress?: student_progressUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCourseInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCourseInput, usersUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentsCreateWithoutCourseInput = {
    progress?: number | null
    enrolled_at?: Date | string | null
    users: usersCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateWithoutCourseInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
  }

  export type enrollmentsCreateOrConnectWithoutCourseInput = {
    where: enrollmentsWhereUniqueInput
    create: XOR<enrollmentsCreateWithoutCourseInput, enrollmentsUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentsCreateManyCourseInputEnvelope = {
    data: enrollmentsCreateManyCourseInput | enrollmentsCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type moduleCreateWithoutCourseInput = {
    title: string
    description: string
    index_order: number
    Renamedclass?: RenamedclassCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutCourseInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutCourseInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput>
  }

  export type moduleCreateManyCourseInputEnvelope = {
    data: moduleCreateManyCourseInput | moduleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCourseInput = {
    update: XOR<usersUpdateWithoutCourseInput, usersUncheckedUpdateWithoutCourseInput>
    create: XOR<usersCreateWithoutCourseInput, usersUncheckedCreateWithoutCourseInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCourseInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCourseInput, usersUncheckedUpdateWithoutCourseInput>
  }

  export type usersUpdateWithoutCourseInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUpdateManyWithoutUsersNestedInput
    student_progress?: student_progressUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCourseInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutUsersNestedInput
    student_progress?: student_progressUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type enrollmentsUpsertWithWhereUniqueWithoutCourseInput = {
    where: enrollmentsWhereUniqueInput
    update: XOR<enrollmentsUpdateWithoutCourseInput, enrollmentsUncheckedUpdateWithoutCourseInput>
    create: XOR<enrollmentsCreateWithoutCourseInput, enrollmentsUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentsUpdateWithWhereUniqueWithoutCourseInput = {
    where: enrollmentsWhereUniqueInput
    data: XOR<enrollmentsUpdateWithoutCourseInput, enrollmentsUncheckedUpdateWithoutCourseInput>
  }

  export type enrollmentsUpdateManyWithWhereWithoutCourseInput = {
    where: enrollmentsScalarWhereInput
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyWithoutCourseInput>
  }

  export type moduleUpsertWithWhereUniqueWithoutCourseInput = {
    where: moduleWhereUniqueInput
    update: XOR<moduleUpdateWithoutCourseInput, moduleUncheckedUpdateWithoutCourseInput>
    create: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput>
  }

  export type moduleUpdateWithWhereUniqueWithoutCourseInput = {
    where: moduleWhereUniqueInput
    data: XOR<moduleUpdateWithoutCourseInput, moduleUncheckedUpdateWithoutCourseInput>
  }

  export type moduleUpdateManyWithWhereWithoutCourseInput = {
    where: moduleScalarWhereInput
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyWithoutCourseInput>
  }

  export type moduleScalarWhereInput = {
    AND?: moduleScalarWhereInput | moduleScalarWhereInput[]
    OR?: moduleScalarWhereInput[]
    NOT?: moduleScalarWhereInput | moduleScalarWhereInput[]
    id_module?: IntFilter<"module"> | number
    title?: StringFilter<"module"> | string
    description?: StringFilter<"module"> | string
    index_order?: IntFilter<"module"> | number
    fk_course?: IntFilter<"module"> | number
  }

  export type courseCreateWithoutEnrollmentsInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    users: usersCreateNestedOneWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutEnrollmentsInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutEnrollmentsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type usersCreateWithoutEnrollmentsInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    course?: courseCreateNestedManyWithoutUsersInput
    student_progress?: student_progressCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEnrollmentsInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    course?: courseUncheckedCreateNestedManyWithoutUsersInput
    student_progress?: student_progressUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEnrollmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
  }

  export type courseUpsertWithoutEnrollmentsInput = {
    update: XOR<courseUpdateWithoutEnrollmentsInput, courseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutEnrollmentsInput, courseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type courseUpdateWithoutEnrollmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutEnrollmentsInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type usersUpsertWithoutEnrollmentsInput = {
    update: XOR<usersUpdateWithoutEnrollmentsInput, usersUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEnrollmentsInput, usersUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type usersUpdateWithoutEnrollmentsInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUpdateManyWithoutUsersNestedInput
    student_progress?: student_progressUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEnrollmentsInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUncheckedUpdateManyWithoutUsersNestedInput
    student_progress?: student_progressUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RenamedclassCreateWithoutModuleInput = {
    title: string
    description: string
    index_order: number
    class_file?: class_fileCreateNestedManyWithoutRenamedclassInput
    student_progress?: student_progressCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUncheckedCreateWithoutModuleInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    class_file?: class_fileUncheckedCreateNestedManyWithoutRenamedclassInput
    student_progress?: student_progressUncheckedCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassCreateOrConnectWithoutModuleInput = {
    where: RenamedclassWhereUniqueInput
    create: XOR<RenamedclassCreateWithoutModuleInput, RenamedclassUncheckedCreateWithoutModuleInput>
  }

  export type RenamedclassCreateManyModuleInputEnvelope = {
    data: RenamedclassCreateManyModuleInput | RenamedclassCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutModuleInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    users: usersCreateNestedOneWithoutCourseInput
    enrollments?: enrollmentsCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutModuleInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutModuleInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
  }

  export type RenamedclassUpsertWithWhereUniqueWithoutModuleInput = {
    where: RenamedclassWhereUniqueInput
    update: XOR<RenamedclassUpdateWithoutModuleInput, RenamedclassUncheckedUpdateWithoutModuleInput>
    create: XOR<RenamedclassCreateWithoutModuleInput, RenamedclassUncheckedCreateWithoutModuleInput>
  }

  export type RenamedclassUpdateWithWhereUniqueWithoutModuleInput = {
    where: RenamedclassWhereUniqueInput
    data: XOR<RenamedclassUpdateWithoutModuleInput, RenamedclassUncheckedUpdateWithoutModuleInput>
  }

  export type RenamedclassUpdateManyWithWhereWithoutModuleInput = {
    where: RenamedclassScalarWhereInput
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyWithoutModuleInput>
  }

  export type RenamedclassScalarWhereInput = {
    AND?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[]
    OR?: RenamedclassScalarWhereInput[]
    NOT?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[]
    class_id?: IntFilter<"Renamedclass"> | number
    title?: StringFilter<"Renamedclass"> | string
    description?: StringFilter<"Renamedclass"> | string
    index_order?: IntFilter<"Renamedclass"> | number
    fk_module?: IntFilter<"Renamedclass"> | number
  }

  export type courseUpsertWithoutModuleInput = {
    update: XOR<courseUpdateWithoutModuleInput, courseUncheckedUpdateWithoutModuleInput>
    create: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutModuleInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutModuleInput, courseUncheckedUpdateWithoutModuleInput>
  }

  export type courseUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutCourseNestedInput
    enrollments?: enrollmentsUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutModuleInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type RenamedclassCreateWithoutStudent_progressInput = {
    title: string
    description: string
    index_order: number
    module: moduleCreateNestedOneWithoutRenamedclassInput
    class_file?: class_fileCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUncheckedCreateWithoutStudent_progressInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
    class_file?: class_fileUncheckedCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassCreateOrConnectWithoutStudent_progressInput = {
    where: RenamedclassWhereUniqueInput
    create: XOR<RenamedclassCreateWithoutStudent_progressInput, RenamedclassUncheckedCreateWithoutStudent_progressInput>
  }

  export type usersCreateWithoutStudent_progressInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    course?: courseCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutStudent_progressInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    course?: courseUncheckedCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutStudent_progressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStudent_progressInput, usersUncheckedCreateWithoutStudent_progressInput>
  }

  export type RenamedclassUpsertWithoutStudent_progressInput = {
    update: XOR<RenamedclassUpdateWithoutStudent_progressInput, RenamedclassUncheckedUpdateWithoutStudent_progressInput>
    create: XOR<RenamedclassCreateWithoutStudent_progressInput, RenamedclassUncheckedCreateWithoutStudent_progressInput>
    where?: RenamedclassWhereInput
  }

  export type RenamedclassUpdateToOneWithWhereWithoutStudent_progressInput = {
    where?: RenamedclassWhereInput
    data: XOR<RenamedclassUpdateWithoutStudent_progressInput, RenamedclassUncheckedUpdateWithoutStudent_progressInput>
  }

  export type RenamedclassUpdateWithoutStudent_progressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    module?: moduleUpdateOneRequiredWithoutRenamedclassNestedInput
    class_file?: class_fileUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassUncheckedUpdateWithoutStudent_progressInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
    class_file?: class_fileUncheckedUpdateManyWithoutRenamedclassNestedInput
  }

  export type usersUpsertWithoutStudent_progressInput = {
    update: XOR<usersUpdateWithoutStudent_progressInput, usersUncheckedUpdateWithoutStudent_progressInput>
    create: XOR<usersCreateWithoutStudent_progressInput, usersUncheckedCreateWithoutStudent_progressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStudent_progressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStudent_progressInput, usersUncheckedUpdateWithoutStudent_progressInput>
  }

  export type usersUpdateWithoutStudent_progressInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutStudent_progressInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUncheckedUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type courseCreateManyUsersInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
  }

  export type enrollmentsCreateManyUsersInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    course_id: number
  }

  export type student_progressCreateManyUsersInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
  }

  export type courseUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    enrollments?: enrollmentsUpdateManyWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutUsersInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCourseNestedInput
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutUsersInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentsUpdateWithoutUsersInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateWithoutUsersInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type enrollmentsUncheckedUpdateManyWithoutUsersInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type student_progressUpdateWithoutUsersInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutStudent_progressNestedInput
  }

  export type student_progressUncheckedUpdateWithoutUsersInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type student_progressUncheckedUpdateManyWithoutUsersInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type class_fileCreateManyRenamedclassInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type student_progressCreateManyRenamedclassInput = {
    progress_id?: number
    completed_at?: Date | string | null
    student_id: string
  }

  export type class_fileUpdateWithoutRenamedclassInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type class_fileUncheckedUpdateWithoutRenamedclassInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type class_fileUncheckedUpdateManyWithoutRenamedclassInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type student_progressUpdateWithoutRenamedclassInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutStudent_progressNestedInput
  }

  export type student_progressUncheckedUpdateWithoutRenamedclassInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type student_progressUncheckedUpdateManyWithoutRenamedclassInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentsCreateManyCourseInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
  }

  export type moduleCreateManyCourseInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
  }

  export type enrollmentsUpdateWithoutCourseInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateWithoutCourseInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentsUncheckedUpdateManyWithoutCourseInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type moduleUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Renamedclass?: RenamedclassUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutCourseInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateManyWithoutCourseInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type RenamedclassCreateManyModuleInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
  }

  export type RenamedclassUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    class_file?: class_fileUpdateManyWithoutRenamedclassNestedInput
    student_progress?: student_progressUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassUncheckedUpdateWithoutModuleInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    class_file?: class_fileUncheckedUpdateManyWithoutRenamedclassNestedInput
    student_progress?: student_progressUncheckedUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassUncheckedUpdateManyWithoutModuleInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}