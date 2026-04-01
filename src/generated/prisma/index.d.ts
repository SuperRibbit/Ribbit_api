
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
 * Model Class_file
 * 
 */
export type Class_file = $Result.DefaultSelection<Prisma.$Class_filePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Course_class
 * 
 */
export type Course_class = $Result.DefaultSelection<Prisma.$Course_classPayload>
/**
 * Model Enrollment
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Student_progress
 * 
 */
export type Student_progress = $Result.DefaultSelection<Prisma.$Student_progressPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

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
 * // Fetch zero or more Class_files
 * const class_files = await prisma.class_file.findMany()
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
   * // Fetch zero or more Class_files
   * const class_files = await prisma.class_file.findMany()
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
   * `prisma.class_file`: Exposes CRUD operations for the **Class_file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Class_files
    * const class_files = await prisma.class_file.findMany()
    * ```
    */
  get class_file(): Prisma.Class_fileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_class`: Exposes CRUD operations for the **Course_class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_classes
    * const course_classes = await prisma.course_class.findMany()
    * ```
    */
  get course_class(): Prisma.Course_classDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_progress`: Exposes CRUD operations for the **Student_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_progresses
    * const student_progresses = await prisma.student_progress.findMany()
    * ```
    */
  get student_progress(): Prisma.Student_progressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Class_file: 'Class_file',
    Course: 'Course',
    Course_class: 'Course_class',
    Enrollment: 'Enrollment',
    Module: 'Module',
    Student_progress: 'Student_progress',
    User: 'User'
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
      modelProps: "class_file" | "course" | "course_class" | "enrollment" | "module" | "student_progress" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Class_file: {
        payload: Prisma.$Class_filePayload<ExtArgs>
        fields: Prisma.Class_fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Class_fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Class_fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>
          }
          findFirst: {
            args: Prisma.Class_fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Class_fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>
          }
          findMany: {
            args: Prisma.Class_fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>[]
          }
          create: {
            args: Prisma.Class_fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>
          }
          createMany: {
            args: Prisma.Class_fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Class_fileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>[]
          }
          delete: {
            args: Prisma.Class_fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>
          }
          update: {
            args: Prisma.Class_fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>
          }
          deleteMany: {
            args: Prisma.Class_fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Class_fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Class_fileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>[]
          }
          upsert: {
            args: Prisma.Class_fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_filePayload>
          }
          aggregate: {
            args: Prisma.Class_fileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass_file>
          }
          groupBy: {
            args: Prisma.Class_fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Class_fileGroupByOutputType>[]
          }
          count: {
            args: Prisma.Class_fileCountArgs<ExtArgs>
            result: $Utils.Optional<Class_fileCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Course_class: {
        payload: Prisma.$Course_classPayload<ExtArgs>
        fields: Prisma.Course_classFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Course_classFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Course_classFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>
          }
          findFirst: {
            args: Prisma.Course_classFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Course_classFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>
          }
          findMany: {
            args: Prisma.Course_classFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>[]
          }
          create: {
            args: Prisma.Course_classCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>
          }
          createMany: {
            args: Prisma.Course_classCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Course_classCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>[]
          }
          delete: {
            args: Prisma.Course_classDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>
          }
          update: {
            args: Prisma.Course_classUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>
          }
          deleteMany: {
            args: Prisma.Course_classDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Course_classUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Course_classUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>[]
          }
          upsert: {
            args: Prisma.Course_classUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Course_classPayload>
          }
          aggregate: {
            args: Prisma.Course_classAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_class>
          }
          groupBy: {
            args: Prisma.Course_classGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_classGroupByOutputType>[]
          }
          count: {
            args: Prisma.Course_classCountArgs<ExtArgs>
            result: $Utils.Optional<Course_classCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Student_progress: {
        payload: Prisma.$Student_progressPayload<ExtArgs>
        fields: Prisma.Student_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Student_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Student_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>
          }
          findFirst: {
            args: Prisma.Student_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Student_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>
          }
          findMany: {
            args: Prisma.Student_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>[]
          }
          create: {
            args: Prisma.Student_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>
          }
          createMany: {
            args: Prisma.Student_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Student_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>[]
          }
          delete: {
            args: Prisma.Student_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>
          }
          update: {
            args: Prisma.Student_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>
          }
          deleteMany: {
            args: Prisma.Student_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Student_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Student_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>[]
          }
          upsert: {
            args: Prisma.Student_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_progressPayload>
          }
          aggregate: {
            args: Prisma.Student_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_progress>
          }
          groupBy: {
            args: Prisma.Student_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.Student_progressCountArgs<ExtArgs>
            result: $Utils.Optional<Student_progressCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    class_file?: Class_fileOmit
    course?: CourseOmit
    course_class?: Course_classOmit
    enrollment?: EnrollmentOmit
    module?: ModuleOmit
    student_progress?: Student_progressOmit
    user?: UserOmit
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    Enrollment: number
    Module: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | CourseCountOutputTypeCountEnrollmentArgs
    Module?: boolean | CourseCountOutputTypeCountModuleArgs
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
  export type CourseCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }


  /**
   * Count Type Course_classCountOutputType
   */

  export type Course_classCountOutputType = {
    Class_file: number
    Student_progress: number
  }

  export type Course_classCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Class_file?: boolean | Course_classCountOutputTypeCountClass_fileArgs
    Student_progress?: boolean | Course_classCountOutputTypeCountStudent_progressArgs
  }

  // Custom InputTypes
  /**
   * Course_classCountOutputType without action
   */
  export type Course_classCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_classCountOutputType
     */
    select?: Course_classCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Course_classCountOutputType without action
   */
  export type Course_classCountOutputTypeCountClass_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Class_fileWhereInput
  }

  /**
   * Course_classCountOutputType without action
   */
  export type Course_classCountOutputTypeCountStudent_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_progressWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    Course_class: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | ModuleCountOutputTypeCountCourse_classArgs
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
  export type ModuleCountOutputTypeCountCourse_classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Course_classWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Course: number
    Enrollment: number
    Student_progress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | UserCountOutputTypeCountCourseArgs
    Enrollment?: boolean | UserCountOutputTypeCountEnrollmentArgs
    Student_progress?: boolean | UserCountOutputTypeCountStudent_progressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudent_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_progressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Class_file
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
     * Filter which Class_file to aggregate.
     */
    where?: Class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_files to fetch.
     */
    orderBy?: Class_fileOrderByWithRelationInput | Class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Class_files
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




  export type Class_fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Class_fileWhereInput
    orderBy?: Class_fileOrderByWithAggregationInput | Class_fileOrderByWithAggregationInput[]
    by: Class_fileScalarFieldEnum[] | Class_fileScalarFieldEnum
    having?: Class_fileScalarWhereWithAggregatesInput
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

  type GetClass_fileGroupByPayload<T extends Class_fileGroupByArgs> = Prisma.PrismaPromise<
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


  export type Class_fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_file"]>

  export type Class_fileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_file"]>

  export type Class_fileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_file"]>

  export type Class_fileSelectScalar = {
    file_id?: boolean
    display_name?: boolean
    storage_path?: boolean
    file_url?: boolean
    file_type?: boolean
    metadata?: boolean
    class_id?: boolean
  }

  export type Class_fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "display_name" | "storage_path" | "file_url" | "file_type" | "metadata" | "class_id", ExtArgs["result"]["class_file"]>
  export type Class_fileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
  }
  export type Class_fileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
  }
  export type Class_fileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
  }

  export type $Class_filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class_file"
    objects: {
      Course_class: Prisma.$Course_classPayload<ExtArgs>
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

  type Class_fileGetPayload<S extends boolean | null | undefined | Class_fileDefaultArgs> = $Result.GetResult<Prisma.$Class_filePayload, S>

  type Class_fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Class_fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Class_fileCountAggregateInputType | true
    }

  export interface Class_fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class_file'], meta: { name: 'Class_file' } }
    /**
     * Find zero or one Class_file that matches the filter.
     * @param {Class_fileFindUniqueArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Class_fileFindUniqueArgs>(args: SelectSubset<T, Class_fileFindUniqueArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class_file that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Class_fileFindUniqueOrThrowArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Class_fileFindUniqueOrThrowArgs>(args: SelectSubset<T, Class_fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_file that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_fileFindFirstArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Class_fileFindFirstArgs>(args?: SelectSubset<T, Class_fileFindFirstArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_file that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_fileFindFirstOrThrowArgs} args - Arguments to find a Class_file
     * @example
     * // Get one Class_file
     * const class_file = await prisma.class_file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Class_fileFindFirstOrThrowArgs>(args?: SelectSubset<T, Class_fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Class_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_fileFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends Class_fileFindManyArgs>(args?: SelectSubset<T, Class_fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class_file.
     * @param {Class_fileCreateArgs} args - Arguments to create a Class_file.
     * @example
     * // Create one Class_file
     * const Class_file = await prisma.class_file.create({
     *   data: {
     *     // ... data to create a Class_file
     *   }
     * })
     * 
     */
    create<T extends Class_fileCreateArgs>(args: SelectSubset<T, Class_fileCreateArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Class_files.
     * @param {Class_fileCreateManyArgs} args - Arguments to create many Class_files.
     * @example
     * // Create many Class_files
     * const class_file = await prisma.class_file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Class_fileCreateManyArgs>(args?: SelectSubset<T, Class_fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Class_files and returns the data saved in the database.
     * @param {Class_fileCreateManyAndReturnArgs} args - Arguments to create many Class_files.
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
    createManyAndReturn<T extends Class_fileCreateManyAndReturnArgs>(args?: SelectSubset<T, Class_fileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class_file.
     * @param {Class_fileDeleteArgs} args - Arguments to delete one Class_file.
     * @example
     * // Delete one Class_file
     * const Class_file = await prisma.class_file.delete({
     *   where: {
     *     // ... filter to delete one Class_file
     *   }
     * })
     * 
     */
    delete<T extends Class_fileDeleteArgs>(args: SelectSubset<T, Class_fileDeleteArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class_file.
     * @param {Class_fileUpdateArgs} args - Arguments to update one Class_file.
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
    update<T extends Class_fileUpdateArgs>(args: SelectSubset<T, Class_fileUpdateArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Class_files.
     * @param {Class_fileDeleteManyArgs} args - Arguments to filter Class_files to delete.
     * @example
     * // Delete a few Class_files
     * const { count } = await prisma.class_file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Class_fileDeleteManyArgs>(args?: SelectSubset<T, Class_fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_fileUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends Class_fileUpdateManyArgs>(args: SelectSubset<T, Class_fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_files and returns the data updated in the database.
     * @param {Class_fileUpdateManyAndReturnArgs} args - Arguments to update many Class_files.
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
    updateManyAndReturn<T extends Class_fileUpdateManyAndReturnArgs>(args: SelectSubset<T, Class_fileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class_file.
     * @param {Class_fileUpsertArgs} args - Arguments to update or create a Class_file.
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
    upsert<T extends Class_fileUpsertArgs>(args: SelectSubset<T, Class_fileUpsertArgs<ExtArgs>>): Prisma__Class_fileClient<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Class_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_fileCountArgs} args - Arguments to filter Class_files to count.
     * @example
     * // Count the number of Class_files
     * const count = await prisma.class_file.count({
     *   where: {
     *     // ... the filter for the Class_files we want to count
     *   }
     * })
    **/
    count<T extends Class_fileCountArgs>(
      args?: Subset<T, Class_fileCountArgs>,
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
     * @param {Class_fileGroupByArgs} args - Group by arguments.
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
      T extends Class_fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Class_fileGroupByArgs['orderBy'] }
        : { orderBy?: Class_fileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Class_fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_fileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class_file model
   */
  readonly fields: Class_fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class_file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Class_fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course_class<T extends Course_classDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Course_classDefaultArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Class_file model
   */
  interface Class_fileFieldRefs {
    readonly file_id: FieldRef<"Class_file", 'Int'>
    readonly display_name: FieldRef<"Class_file", 'String'>
    readonly storage_path: FieldRef<"Class_file", 'String'>
    readonly file_url: FieldRef<"Class_file", 'String'>
    readonly file_type: FieldRef<"Class_file", 'String'>
    readonly metadata: FieldRef<"Class_file", 'Json'>
    readonly class_id: FieldRef<"Class_file", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Class_file findUnique
   */
  export type Class_fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * Filter, which Class_file to fetch.
     */
    where: Class_fileWhereUniqueInput
  }

  /**
   * Class_file findUniqueOrThrow
   */
  export type Class_fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * Filter, which Class_file to fetch.
     */
    where: Class_fileWhereUniqueInput
  }

  /**
   * Class_file findFirst
   */
  export type Class_fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * Filter, which Class_file to fetch.
     */
    where?: Class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_files to fetch.
     */
    orderBy?: Class_fileOrderByWithRelationInput | Class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Class_files.
     */
    cursor?: Class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Class_files.
     */
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * Class_file findFirstOrThrow
   */
  export type Class_fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * Filter, which Class_file to fetch.
     */
    where?: Class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_files to fetch.
     */
    orderBy?: Class_fileOrderByWithRelationInput | Class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Class_files.
     */
    cursor?: Class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Class_files.
     */
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * Class_file findMany
   */
  export type Class_fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * Filter, which Class_files to fetch.
     */
    where?: Class_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_files to fetch.
     */
    orderBy?: Class_fileOrderByWithRelationInput | Class_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Class_files.
     */
    cursor?: Class_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_files.
     */
    skip?: number
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * Class_file create
   */
  export type Class_fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * The data needed to create a Class_file.
     */
    data: XOR<Class_fileCreateInput, Class_fileUncheckedCreateInput>
  }

  /**
   * Class_file createMany
   */
  export type Class_fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Class_files.
     */
    data: Class_fileCreateManyInput | Class_fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class_file createManyAndReturn
   */
  export type Class_fileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * The data used to create many Class_files.
     */
    data: Class_fileCreateManyInput | Class_fileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class_file update
   */
  export type Class_fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * The data needed to update a Class_file.
     */
    data: XOR<Class_fileUpdateInput, Class_fileUncheckedUpdateInput>
    /**
     * Choose, which Class_file to update.
     */
    where: Class_fileWhereUniqueInput
  }

  /**
   * Class_file updateMany
   */
  export type Class_fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Class_files.
     */
    data: XOR<Class_fileUpdateManyMutationInput, Class_fileUncheckedUpdateManyInput>
    /**
     * Filter which Class_files to update
     */
    where?: Class_fileWhereInput
    /**
     * Limit how many Class_files to update.
     */
    limit?: number
  }

  /**
   * Class_file updateManyAndReturn
   */
  export type Class_fileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * The data used to update Class_files.
     */
    data: XOR<Class_fileUpdateManyMutationInput, Class_fileUncheckedUpdateManyInput>
    /**
     * Filter which Class_files to update
     */
    where?: Class_fileWhereInput
    /**
     * Limit how many Class_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class_file upsert
   */
  export type Class_fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * The filter to search for the Class_file to update in case it exists.
     */
    where: Class_fileWhereUniqueInput
    /**
     * In case the Class_file found by the `where` argument doesn't exist, create a new Class_file with this data.
     */
    create: XOR<Class_fileCreateInput, Class_fileUncheckedCreateInput>
    /**
     * In case the Class_file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Class_fileUpdateInput, Class_fileUncheckedUpdateInput>
  }

  /**
   * Class_file delete
   */
  export type Class_fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    /**
     * Filter which Class_file to delete.
     */
    where: Class_fileWhereUniqueInput
  }

  /**
   * Class_file deleteMany
   */
  export type Class_fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class_files to delete
     */
    where?: Class_fileWhereInput
    /**
     * Limit how many Class_files to delete.
     */
    limit?: number
  }

  /**
   * Class_file without action
   */
  export type Class_fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
  }


  /**
   * Model Course
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
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
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




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
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

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
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


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Enrollment?: boolean | Course$EnrollmentArgs<ExtArgs>
    Module?: boolean | Course$ModuleArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id_course?: boolean
    title?: boolean
    description?: boolean
    banner_url?: boolean
    slug?: boolean
    fk_teacher?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_course" | "title" | "description" | "banner_url" | "slug" | "fk_teacher", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Enrollment?: boolean | Course$EnrollmentArgs<ExtArgs>
    Module?: boolean | Course$ModuleArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      Module: Prisma.$ModulePayload<ExtArgs>[]
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

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
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
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
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
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
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
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
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
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Enrollment<T extends Course$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, Course$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Module<T extends Course$ModuleArgs<ExtArgs> = {}>(args?: Subset<T, Course$ModuleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id_course: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly banner_url: FieldRef<"Course", 'String'>
    readonly slug: FieldRef<"Course", 'String'>
    readonly fk_teacher: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.Enrollment
   */
  export type Course$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.Module
   */
  export type Course$ModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Course_class
   */

  export type AggregateCourse_class = {
    _count: Course_classCountAggregateOutputType | null
    _avg: Course_classAvgAggregateOutputType | null
    _sum: Course_classSumAggregateOutputType | null
    _min: Course_classMinAggregateOutputType | null
    _max: Course_classMaxAggregateOutputType | null
  }

  export type Course_classAvgAggregateOutputType = {
    class_id: number | null
    index_order: number | null
    fk_module: number | null
  }

  export type Course_classSumAggregateOutputType = {
    class_id: number | null
    index_order: number | null
    fk_module: number | null
  }

  export type Course_classMinAggregateOutputType = {
    class_id: number | null
    title: string | null
    description: string | null
    index_order: number | null
    fk_module: number | null
  }

  export type Course_classMaxAggregateOutputType = {
    class_id: number | null
    title: string | null
    description: string | null
    index_order: number | null
    fk_module: number | null
  }

  export type Course_classCountAggregateOutputType = {
    class_id: number
    title: number
    description: number
    index_order: number
    fk_module: number
    _all: number
  }


  export type Course_classAvgAggregateInputType = {
    class_id?: true
    index_order?: true
    fk_module?: true
  }

  export type Course_classSumAggregateInputType = {
    class_id?: true
    index_order?: true
    fk_module?: true
  }

  export type Course_classMinAggregateInputType = {
    class_id?: true
    title?: true
    description?: true
    index_order?: true
    fk_module?: true
  }

  export type Course_classMaxAggregateInputType = {
    class_id?: true
    title?: true
    description?: true
    index_order?: true
    fk_module?: true
  }

  export type Course_classCountAggregateInputType = {
    class_id?: true
    title?: true
    description?: true
    index_order?: true
    fk_module?: true
    _all?: true
  }

  export type Course_classAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course_class to aggregate.
     */
    where?: Course_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Course_classes to fetch.
     */
    orderBy?: Course_classOrderByWithRelationInput | Course_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Course_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Course_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Course_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Course_classes
    **/
    _count?: true | Course_classCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Course_classAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Course_classSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_classMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_classMaxAggregateInputType
  }

  export type GetCourse_classAggregateType<T extends Course_classAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_class[P]>
      : GetScalarType<T[P], AggregateCourse_class[P]>
  }




  export type Course_classGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Course_classWhereInput
    orderBy?: Course_classOrderByWithAggregationInput | Course_classOrderByWithAggregationInput[]
    by: Course_classScalarFieldEnum[] | Course_classScalarFieldEnum
    having?: Course_classScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_classCountAggregateInputType | true
    _avg?: Course_classAvgAggregateInputType
    _sum?: Course_classSumAggregateInputType
    _min?: Course_classMinAggregateInputType
    _max?: Course_classMaxAggregateInputType
  }

  export type Course_classGroupByOutputType = {
    class_id: number
    title: string
    description: string
    index_order: number
    fk_module: number
    _count: Course_classCountAggregateOutputType | null
    _avg: Course_classAvgAggregateOutputType | null
    _sum: Course_classSumAggregateOutputType | null
    _min: Course_classMinAggregateOutputType | null
    _max: Course_classMaxAggregateOutputType | null
  }

  type GetCourse_classGroupByPayload<T extends Course_classGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_classGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_classGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_classGroupByOutputType[P]>
            : GetScalarType<T[P], Course_classGroupByOutputType[P]>
        }
      >
    >


  export type Course_classSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
    Class_file?: boolean | Course_class$Class_fileArgs<ExtArgs>
    Module?: boolean | ModuleDefaultArgs<ExtArgs>
    Student_progress?: boolean | Course_class$Student_progressArgs<ExtArgs>
    _count?: boolean | Course_classCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_class"]>

  export type Course_classSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
    Module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_class"]>

  export type Course_classSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
    Module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_class"]>

  export type Course_classSelectScalar = {
    class_id?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_module?: boolean
  }

  export type Course_classOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"class_id" | "title" | "description" | "index_order" | "fk_module", ExtArgs["result"]["course_class"]>
  export type Course_classInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Class_file?: boolean | Course_class$Class_fileArgs<ExtArgs>
    Module?: boolean | ModuleDefaultArgs<ExtArgs>
    Student_progress?: boolean | Course_class$Student_progressArgs<ExtArgs>
    _count?: boolean | Course_classCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Course_classIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type Course_classIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $Course_classPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course_class"
    objects: {
      Class_file: Prisma.$Class_filePayload<ExtArgs>[]
      Module: Prisma.$ModulePayload<ExtArgs>
      Student_progress: Prisma.$Student_progressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      class_id: number
      title: string
      description: string
      index_order: number
      fk_module: number
    }, ExtArgs["result"]["course_class"]>
    composites: {}
  }

  type Course_classGetPayload<S extends boolean | null | undefined | Course_classDefaultArgs> = $Result.GetResult<Prisma.$Course_classPayload, S>

  type Course_classCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Course_classFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_classCountAggregateInputType | true
    }

  export interface Course_classDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course_class'], meta: { name: 'Course_class' } }
    /**
     * Find zero or one Course_class that matches the filter.
     * @param {Course_classFindUniqueArgs} args - Arguments to find a Course_class
     * @example
     * // Get one Course_class
     * const course_class = await prisma.course_class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Course_classFindUniqueArgs>(args: SelectSubset<T, Course_classFindUniqueArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Course_classFindUniqueOrThrowArgs} args - Arguments to find a Course_class
     * @example
     * // Get one Course_class
     * const course_class = await prisma.course_class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Course_classFindUniqueOrThrowArgs>(args: SelectSubset<T, Course_classFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classFindFirstArgs} args - Arguments to find a Course_class
     * @example
     * // Get one Course_class
     * const course_class = await prisma.course_class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Course_classFindFirstArgs>(args?: SelectSubset<T, Course_classFindFirstArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classFindFirstOrThrowArgs} args - Arguments to find a Course_class
     * @example
     * // Get one Course_class
     * const course_class = await prisma.course_class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Course_classFindFirstOrThrowArgs>(args?: SelectSubset<T, Course_classFindFirstOrThrowArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_classes
     * const course_classes = await prisma.course_class.findMany()
     * 
     * // Get first 10 Course_classes
     * const course_classes = await prisma.course_class.findMany({ take: 10 })
     * 
     * // Only select the `class_id`
     * const course_classWithClass_idOnly = await prisma.course_class.findMany({ select: { class_id: true } })
     * 
     */
    findMany<T extends Course_classFindManyArgs>(args?: SelectSubset<T, Course_classFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_class.
     * @param {Course_classCreateArgs} args - Arguments to create a Course_class.
     * @example
     * // Create one Course_class
     * const Course_class = await prisma.course_class.create({
     *   data: {
     *     // ... data to create a Course_class
     *   }
     * })
     * 
     */
    create<T extends Course_classCreateArgs>(args: SelectSubset<T, Course_classCreateArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_classes.
     * @param {Course_classCreateManyArgs} args - Arguments to create many Course_classes.
     * @example
     * // Create many Course_classes
     * const course_class = await prisma.course_class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Course_classCreateManyArgs>(args?: SelectSubset<T, Course_classCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_classes and returns the data saved in the database.
     * @param {Course_classCreateManyAndReturnArgs} args - Arguments to create many Course_classes.
     * @example
     * // Create many Course_classes
     * const course_class = await prisma.course_class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_classes and only return the `class_id`
     * const course_classWithClass_idOnly = await prisma.course_class.createManyAndReturn({
     *   select: { class_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Course_classCreateManyAndReturnArgs>(args?: SelectSubset<T, Course_classCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_class.
     * @param {Course_classDeleteArgs} args - Arguments to delete one Course_class.
     * @example
     * // Delete one Course_class
     * const Course_class = await prisma.course_class.delete({
     *   where: {
     *     // ... filter to delete one Course_class
     *   }
     * })
     * 
     */
    delete<T extends Course_classDeleteArgs>(args: SelectSubset<T, Course_classDeleteArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_class.
     * @param {Course_classUpdateArgs} args - Arguments to update one Course_class.
     * @example
     * // Update one Course_class
     * const course_class = await prisma.course_class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Course_classUpdateArgs>(args: SelectSubset<T, Course_classUpdateArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_classes.
     * @param {Course_classDeleteManyArgs} args - Arguments to filter Course_classes to delete.
     * @example
     * // Delete a few Course_classes
     * const { count } = await prisma.course_class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Course_classDeleteManyArgs>(args?: SelectSubset<T, Course_classDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_classes
     * const course_class = await prisma.course_class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Course_classUpdateManyArgs>(args: SelectSubset<T, Course_classUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_classes and returns the data updated in the database.
     * @param {Course_classUpdateManyAndReturnArgs} args - Arguments to update many Course_classes.
     * @example
     * // Update many Course_classes
     * const course_class = await prisma.course_class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_classes and only return the `class_id`
     * const course_classWithClass_idOnly = await prisma.course_class.updateManyAndReturn({
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
    updateManyAndReturn<T extends Course_classUpdateManyAndReturnArgs>(args: SelectSubset<T, Course_classUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_class.
     * @param {Course_classUpsertArgs} args - Arguments to update or create a Course_class.
     * @example
     * // Update or create a Course_class
     * const course_class = await prisma.course_class.upsert({
     *   create: {
     *     // ... data to create a Course_class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_class we want to update
     *   }
     * })
     */
    upsert<T extends Course_classUpsertArgs>(args: SelectSubset<T, Course_classUpsertArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classCountArgs} args - Arguments to filter Course_classes to count.
     * @example
     * // Count the number of Course_classes
     * const count = await prisma.course_class.count({
     *   where: {
     *     // ... the filter for the Course_classes we want to count
     *   }
     * })
    **/
    count<T extends Course_classCountArgs>(
      args?: Subset<T, Course_classCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_classCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Course_classAggregateArgs>(args: Subset<T, Course_classAggregateArgs>): Prisma.PrismaPromise<GetCourse_classAggregateType<T>>

    /**
     * Group by Course_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_classGroupByArgs} args - Group by arguments.
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
      T extends Course_classGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Course_classGroupByArgs['orderBy'] }
        : { orderBy?: Course_classGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Course_classGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_classGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course_class model
   */
  readonly fields: Course_classFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course_class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Course_classClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Class_file<T extends Course_class$Class_fileArgs<ExtArgs> = {}>(args?: Subset<T, Course_class$Class_fileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Student_progress<T extends Course_class$Student_progressArgs<ExtArgs> = {}>(args?: Subset<T, Course_class$Student_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course_class model
   */
  interface Course_classFieldRefs {
    readonly class_id: FieldRef<"Course_class", 'Int'>
    readonly title: FieldRef<"Course_class", 'String'>
    readonly description: FieldRef<"Course_class", 'String'>
    readonly index_order: FieldRef<"Course_class", 'Int'>
    readonly fk_module: FieldRef<"Course_class", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course_class findUnique
   */
  export type Course_classFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * Filter, which Course_class to fetch.
     */
    where: Course_classWhereUniqueInput
  }

  /**
   * Course_class findUniqueOrThrow
   */
  export type Course_classFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * Filter, which Course_class to fetch.
     */
    where: Course_classWhereUniqueInput
  }

  /**
   * Course_class findFirst
   */
  export type Course_classFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * Filter, which Course_class to fetch.
     */
    where?: Course_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Course_classes to fetch.
     */
    orderBy?: Course_classOrderByWithRelationInput | Course_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Course_classes.
     */
    cursor?: Course_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Course_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Course_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Course_classes.
     */
    distinct?: Course_classScalarFieldEnum | Course_classScalarFieldEnum[]
  }

  /**
   * Course_class findFirstOrThrow
   */
  export type Course_classFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * Filter, which Course_class to fetch.
     */
    where?: Course_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Course_classes to fetch.
     */
    orderBy?: Course_classOrderByWithRelationInput | Course_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Course_classes.
     */
    cursor?: Course_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Course_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Course_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Course_classes.
     */
    distinct?: Course_classScalarFieldEnum | Course_classScalarFieldEnum[]
  }

  /**
   * Course_class findMany
   */
  export type Course_classFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * Filter, which Course_classes to fetch.
     */
    where?: Course_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Course_classes to fetch.
     */
    orderBy?: Course_classOrderByWithRelationInput | Course_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Course_classes.
     */
    cursor?: Course_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Course_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Course_classes.
     */
    skip?: number
    distinct?: Course_classScalarFieldEnum | Course_classScalarFieldEnum[]
  }

  /**
   * Course_class create
   */
  export type Course_classCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * The data needed to create a Course_class.
     */
    data: XOR<Course_classCreateInput, Course_classUncheckedCreateInput>
  }

  /**
   * Course_class createMany
   */
  export type Course_classCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Course_classes.
     */
    data: Course_classCreateManyInput | Course_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course_class createManyAndReturn
   */
  export type Course_classCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * The data used to create many Course_classes.
     */
    data: Course_classCreateManyInput | Course_classCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course_class update
   */
  export type Course_classUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * The data needed to update a Course_class.
     */
    data: XOR<Course_classUpdateInput, Course_classUncheckedUpdateInput>
    /**
     * Choose, which Course_class to update.
     */
    where: Course_classWhereUniqueInput
  }

  /**
   * Course_class updateMany
   */
  export type Course_classUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Course_classes.
     */
    data: XOR<Course_classUpdateManyMutationInput, Course_classUncheckedUpdateManyInput>
    /**
     * Filter which Course_classes to update
     */
    where?: Course_classWhereInput
    /**
     * Limit how many Course_classes to update.
     */
    limit?: number
  }

  /**
   * Course_class updateManyAndReturn
   */
  export type Course_classUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * The data used to update Course_classes.
     */
    data: XOR<Course_classUpdateManyMutationInput, Course_classUncheckedUpdateManyInput>
    /**
     * Filter which Course_classes to update
     */
    where?: Course_classWhereInput
    /**
     * Limit how many Course_classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course_class upsert
   */
  export type Course_classUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * The filter to search for the Course_class to update in case it exists.
     */
    where: Course_classWhereUniqueInput
    /**
     * In case the Course_class found by the `where` argument doesn't exist, create a new Course_class with this data.
     */
    create: XOR<Course_classCreateInput, Course_classUncheckedCreateInput>
    /**
     * In case the Course_class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Course_classUpdateInput, Course_classUncheckedUpdateInput>
  }

  /**
   * Course_class delete
   */
  export type Course_classDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    /**
     * Filter which Course_class to delete.
     */
    where: Course_classWhereUniqueInput
  }

  /**
   * Course_class deleteMany
   */
  export type Course_classDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course_classes to delete
     */
    where?: Course_classWhereInput
    /**
     * Limit how many Course_classes to delete.
     */
    limit?: number
  }

  /**
   * Course_class.Class_file
   */
  export type Course_class$Class_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_file
     */
    select?: Class_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_file
     */
    omit?: Class_fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_fileInclude<ExtArgs> | null
    where?: Class_fileWhereInput
    orderBy?: Class_fileOrderByWithRelationInput | Class_fileOrderByWithRelationInput[]
    cursor?: Class_fileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_fileScalarFieldEnum | Class_fileScalarFieldEnum[]
  }

  /**
   * Course_class.Student_progress
   */
  export type Course_class$Student_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    where?: Student_progressWhereInput
    orderBy?: Student_progressOrderByWithRelationInput | Student_progressOrderByWithRelationInput[]
    cursor?: Student_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * Course_class without action
   */
  export type Course_classDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    course_id: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    course_id: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    enrolled_at: Date | null
    student_id: string | null
    course_id: number | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id_enrollment: number | null
    progress: number | null
    enrolled_at: Date | null
    student_id: string | null
    course_id: number | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id_enrollment: number
    progress: number
    enrolled_at: number
    student_id: number
    course_id: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id_enrollment?: true
    progress?: true
    course_id?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id_enrollment?: true
    progress?: true
    course_id?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id_enrollment?: true
    progress?: true
    enrolled_at?: true
    student_id?: true
    course_id?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id_enrollment?: true
    progress?: true
    enrolled_at?: true
    student_id?: true
    course_id?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id_enrollment?: true
    progress?: true
    enrolled_at?: true
    student_id?: true
    course_id?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id_enrollment: number
    progress: number | null
    enrolled_at: Date | null
    student_id: string
    course_id: number
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id_enrollment?: boolean
    progress?: boolean
    enrolled_at?: boolean
    student_id?: boolean
    course_id?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_enrollment" | "progress" | "enrolled_at" | "student_id" | "course_id", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      Course: Prisma.$CoursePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_enrollment: number
      progress: number | null
      enrolled_at: Date | null
      student_id: string
      course_id: number
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id_enrollment`
     * const enrollmentWithId_enrollmentOnly = await prisma.enrollment.findMany({ select: { id_enrollment: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id_enrollment`
     * const enrollmentWithId_enrollmentOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id_enrollment: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id_enrollment`
     * const enrollmentWithId_enrollmentOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id_enrollment: FieldRef<"Enrollment", 'Int'>
    readonly progress: FieldRef<"Enrollment", 'Int'>
    readonly enrolled_at: FieldRef<"Enrollment", 'DateTime'>
    readonly student_id: FieldRef<"Enrollment", 'String'>
    readonly course_id: FieldRef<"Enrollment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Module
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
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
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




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
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

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
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


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
    Course_class?: boolean | Module$Course_classArgs<ExtArgs>
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id_module?: boolean
    title?: boolean
    description?: boolean
    index_order?: boolean
    fk_course?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_module" | "title" | "description" | "index_order" | "fk_course", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Module$Course_classArgs<ExtArgs>
    Course?: boolean | CourseDefaultArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      Course_class: Prisma.$Course_classPayload<ExtArgs>[]
      Course: Prisma.$CoursePayload<ExtArgs>
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

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
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
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
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
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
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
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
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
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course_class<T extends Module$Course_classArgs<ExtArgs> = {}>(args?: Subset<T, Module$Course_classArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id_module: FieldRef<"Module", 'Int'>
    readonly title: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly index_order: FieldRef<"Module", 'Int'>
    readonly fk_course: FieldRef<"Module", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.Course_class
   */
  export type Module$Course_classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_class
     */
    select?: Course_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course_class
     */
    omit?: Course_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Course_classInclude<ExtArgs> | null
    where?: Course_classWhereInput
    orderBy?: Course_classOrderByWithRelationInput | Course_classOrderByWithRelationInput[]
    cursor?: Course_classWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_classScalarFieldEnum | Course_classScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Student_progress
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
     * Filter which Student_progress to aggregate.
     */
    where?: Student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_progresses to fetch.
     */
    orderBy?: Student_progressOrderByWithRelationInput | Student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Student_progresses
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




  export type Student_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_progressWhereInput
    orderBy?: Student_progressOrderByWithAggregationInput | Student_progressOrderByWithAggregationInput[]
    by: Student_progressScalarFieldEnum[] | Student_progressScalarFieldEnum
    having?: Student_progressScalarWhereWithAggregatesInput
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

  type GetStudent_progressGroupByPayload<T extends Student_progressGroupByArgs> = Prisma.PrismaPromise<
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


  export type Student_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_progress"]>

  export type Student_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_progress"]>

  export type Student_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_progress"]>

  export type Student_progressSelectScalar = {
    progress_id?: boolean
    completed_at?: boolean
    class_id?: boolean
    student_id?: boolean
  }

  export type Student_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"progress_id" | "completed_at" | "class_id" | "student_id", ExtArgs["result"]["student_progress"]>
  export type Student_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Student_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Student_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course_class?: boolean | Course_classDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Student_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student_progress"
    objects: {
      Course_class: Prisma.$Course_classPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      progress_id: number
      completed_at: Date | null
      class_id: number
      student_id: string
    }, ExtArgs["result"]["student_progress"]>
    composites: {}
  }

  type Student_progressGetPayload<S extends boolean | null | undefined | Student_progressDefaultArgs> = $Result.GetResult<Prisma.$Student_progressPayload, S>

  type Student_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Student_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_progressCountAggregateInputType | true
    }

  export interface Student_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student_progress'], meta: { name: 'Student_progress' } }
    /**
     * Find zero or one Student_progress that matches the filter.
     * @param {Student_progressFindUniqueArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Student_progressFindUniqueArgs>(args: SelectSubset<T, Student_progressFindUniqueArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Student_progressFindUniqueOrThrowArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Student_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, Student_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_progressFindFirstArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Student_progressFindFirstArgs>(args?: SelectSubset<T, Student_progressFindFirstArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_progressFindFirstOrThrowArgs} args - Arguments to find a Student_progress
     * @example
     * // Get one Student_progress
     * const student_progress = await prisma.student_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Student_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, Student_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_progressFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends Student_progressFindManyArgs>(args?: SelectSubset<T, Student_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_progress.
     * @param {Student_progressCreateArgs} args - Arguments to create a Student_progress.
     * @example
     * // Create one Student_progress
     * const Student_progress = await prisma.student_progress.create({
     *   data: {
     *     // ... data to create a Student_progress
     *   }
     * })
     * 
     */
    create<T extends Student_progressCreateArgs>(args: SelectSubset<T, Student_progressCreateArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_progresses.
     * @param {Student_progressCreateManyArgs} args - Arguments to create many Student_progresses.
     * @example
     * // Create many Student_progresses
     * const student_progress = await prisma.student_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Student_progressCreateManyArgs>(args?: SelectSubset<T, Student_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_progresses and returns the data saved in the database.
     * @param {Student_progressCreateManyAndReturnArgs} args - Arguments to create many Student_progresses.
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
    createManyAndReturn<T extends Student_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, Student_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_progress.
     * @param {Student_progressDeleteArgs} args - Arguments to delete one Student_progress.
     * @example
     * // Delete one Student_progress
     * const Student_progress = await prisma.student_progress.delete({
     *   where: {
     *     // ... filter to delete one Student_progress
     *   }
     * })
     * 
     */
    delete<T extends Student_progressDeleteArgs>(args: SelectSubset<T, Student_progressDeleteArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_progress.
     * @param {Student_progressUpdateArgs} args - Arguments to update one Student_progress.
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
    update<T extends Student_progressUpdateArgs>(args: SelectSubset<T, Student_progressUpdateArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_progresses.
     * @param {Student_progressDeleteManyArgs} args - Arguments to filter Student_progresses to delete.
     * @example
     * // Delete a few Student_progresses
     * const { count } = await prisma.student_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Student_progressDeleteManyArgs>(args?: SelectSubset<T, Student_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_progressUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends Student_progressUpdateManyArgs>(args: SelectSubset<T, Student_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_progresses and returns the data updated in the database.
     * @param {Student_progressUpdateManyAndReturnArgs} args - Arguments to update many Student_progresses.
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
    updateManyAndReturn<T extends Student_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, Student_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_progress.
     * @param {Student_progressUpsertArgs} args - Arguments to update or create a Student_progress.
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
    upsert<T extends Student_progressUpsertArgs>(args: SelectSubset<T, Student_progressUpsertArgs<ExtArgs>>): Prisma__Student_progressClient<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_progressCountArgs} args - Arguments to filter Student_progresses to count.
     * @example
     * // Count the number of Student_progresses
     * const count = await prisma.student_progress.count({
     *   where: {
     *     // ... the filter for the Student_progresses we want to count
     *   }
     * })
    **/
    count<T extends Student_progressCountArgs>(
      args?: Subset<T, Student_progressCountArgs>,
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
     * @param {Student_progressGroupByArgs} args - Group by arguments.
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
      T extends Student_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Student_progressGroupByArgs['orderBy'] }
        : { orderBy?: Student_progressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Student_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student_progress model
   */
  readonly fields: Student_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Student_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course_class<T extends Course_classDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Course_classDefaultArgs<ExtArgs>>): Prisma__Course_classClient<$Result.GetResult<Prisma.$Course_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Student_progress model
   */
  interface Student_progressFieldRefs {
    readonly progress_id: FieldRef<"Student_progress", 'Int'>
    readonly completed_at: FieldRef<"Student_progress", 'DateTime'>
    readonly class_id: FieldRef<"Student_progress", 'Int'>
    readonly student_id: FieldRef<"Student_progress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student_progress findUnique
   */
  export type Student_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * Filter, which Student_progress to fetch.
     */
    where: Student_progressWhereUniqueInput
  }

  /**
   * Student_progress findUniqueOrThrow
   */
  export type Student_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * Filter, which Student_progress to fetch.
     */
    where: Student_progressWhereUniqueInput
  }

  /**
   * Student_progress findFirst
   */
  export type Student_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * Filter, which Student_progress to fetch.
     */
    where?: Student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_progresses to fetch.
     */
    orderBy?: Student_progressOrderByWithRelationInput | Student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_progresses.
     */
    cursor?: Student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_progresses.
     */
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * Student_progress findFirstOrThrow
   */
  export type Student_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * Filter, which Student_progress to fetch.
     */
    where?: Student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_progresses to fetch.
     */
    orderBy?: Student_progressOrderByWithRelationInput | Student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_progresses.
     */
    cursor?: Student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_progresses.
     */
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * Student_progress findMany
   */
  export type Student_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * Filter, which Student_progresses to fetch.
     */
    where?: Student_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_progresses to fetch.
     */
    orderBy?: Student_progressOrderByWithRelationInput | Student_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Student_progresses.
     */
    cursor?: Student_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_progresses.
     */
    skip?: number
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * Student_progress create
   */
  export type Student_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a Student_progress.
     */
    data: XOR<Student_progressCreateInput, Student_progressUncheckedCreateInput>
  }

  /**
   * Student_progress createMany
   */
  export type Student_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Student_progresses.
     */
    data: Student_progressCreateManyInput | Student_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student_progress createManyAndReturn
   */
  export type Student_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * The data used to create many Student_progresses.
     */
    data: Student_progressCreateManyInput | Student_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student_progress update
   */
  export type Student_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a Student_progress.
     */
    data: XOR<Student_progressUpdateInput, Student_progressUncheckedUpdateInput>
    /**
     * Choose, which Student_progress to update.
     */
    where: Student_progressWhereUniqueInput
  }

  /**
   * Student_progress updateMany
   */
  export type Student_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Student_progresses.
     */
    data: XOR<Student_progressUpdateManyMutationInput, Student_progressUncheckedUpdateManyInput>
    /**
     * Filter which Student_progresses to update
     */
    where?: Student_progressWhereInput
    /**
     * Limit how many Student_progresses to update.
     */
    limit?: number
  }

  /**
   * Student_progress updateManyAndReturn
   */
  export type Student_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * The data used to update Student_progresses.
     */
    data: XOR<Student_progressUpdateManyMutationInput, Student_progressUncheckedUpdateManyInput>
    /**
     * Filter which Student_progresses to update
     */
    where?: Student_progressWhereInput
    /**
     * Limit how many Student_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student_progress upsert
   */
  export type Student_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the Student_progress to update in case it exists.
     */
    where: Student_progressWhereUniqueInput
    /**
     * In case the Student_progress found by the `where` argument doesn't exist, create a new Student_progress with this data.
     */
    create: XOR<Student_progressCreateInput, Student_progressUncheckedCreateInput>
    /**
     * In case the Student_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Student_progressUpdateInput, Student_progressUncheckedUpdateInput>
  }

  /**
   * Student_progress delete
   */
  export type Student_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    /**
     * Filter which Student_progress to delete.
     */
    where: Student_progressWhereUniqueInput
  }

  /**
   * Student_progress deleteMany
   */
  export type Student_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_progresses to delete
     */
    where?: Student_progressWhereInput
    /**
     * Limit how many Student_progresses to delete.
     */
    limit?: number
  }

  /**
   * Student_progress without action
   */
  export type Student_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_uuid: string | null
    email: string | null
    role: $Enums.user_role_enum | null
    password_hash: string | null
    full_name: string | null
    avatar_url: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_uuid: string | null
    email: string | null
    role: $Enums.user_role_enum | null
    password_hash: string | null
    full_name: string | null
    avatar_url: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_uuid: number
    email: number
    role: number
    password_hash: number
    full_name: number
    avatar_url: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_uuid?: true
    email?: true
    role?: true
    password_hash?: true
    full_name?: true
    avatar_url?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_uuid?: true
    email?: true
    role?: true
    password_hash?: true
    full_name?: true
    avatar_url?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_uuid?: true
    email?: true
    role?: true
    password_hash?: true
    full_name?: true
    avatar_url?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_uuid: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url: string | null
    created_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
    Course?: boolean | User$CourseArgs<ExtArgs>
    Enrollment?: boolean | User$EnrollmentArgs<ExtArgs>
    Student_progress?: boolean | User$Student_progressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_uuid?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    full_name?: boolean
    avatar_url?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_uuid" | "email" | "role" | "password_hash" | "full_name" | "avatar_url" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | User$CourseArgs<ExtArgs>
    Enrollment?: boolean | User$EnrollmentArgs<ExtArgs>
    Student_progress?: boolean | User$Student_progressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Course: Prisma.$CoursePayload<ExtArgs>[]
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      Student_progress: Prisma.$Student_progressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_uuid: string
      email: string
      role: $Enums.user_role_enum
      password_hash: string
      full_name: string
      avatar_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_uuid`
     * const userWithUser_uuidOnly = await prisma.user.findMany({ select: { user_uuid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_uuid`
     * const userWithUser_uuidOnly = await prisma.user.createManyAndReturn({
     *   select: { user_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_uuid`
     * const userWithUser_uuidOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course<T extends User$CourseArgs<ExtArgs> = {}>(args?: Subset<T, User$CourseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Enrollment<T extends User$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, User$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Student_progress<T extends User$Student_progressArgs<ExtArgs> = {}>(args?: Subset<T, User$Student_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_uuid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'user_role_enum'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Course
   */
  export type User$CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.Enrollment
   */
  export type User$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.Student_progress
   */
  export type User$Student_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_progress
     */
    select?: Student_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_progress
     */
    omit?: Student_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_progressInclude<ExtArgs> | null
    where?: Student_progressWhereInput
    orderBy?: Student_progressOrderByWithRelationInput | Student_progressOrderByWithRelationInput[]
    cursor?: Student_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_progressScalarFieldEnum | Student_progressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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


  export const Course_classScalarFieldEnum: {
    class_id: 'class_id',
    title: 'title',
    description: 'description',
    index_order: 'index_order',
    fk_module: 'fk_module'
  };

  export type Course_classScalarFieldEnum = (typeof Course_classScalarFieldEnum)[keyof typeof Course_classScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id_enrollment: 'id_enrollment',
    progress: 'progress',
    enrolled_at: 'enrolled_at',
    student_id: 'student_id',
    course_id: 'course_id'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


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


  export const UserScalarFieldEnum: {
    user_uuid: 'user_uuid',
    email: 'email',
    role: 'role',
    password_hash: 'password_hash',
    full_name: 'full_name',
    avatar_url: 'avatar_url',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'user_role_enum'
   */
  export type Enumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum'>
    


  /**
   * Reference to a field of type 'user_role_enum[]'
   */
  export type ListEnumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum[]'>
    


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


  export type Class_fileWhereInput = {
    AND?: Class_fileWhereInput | Class_fileWhereInput[]
    OR?: Class_fileWhereInput[]
    NOT?: Class_fileWhereInput | Class_fileWhereInput[]
    file_id?: IntFilter<"Class_file"> | number
    display_name?: StringFilter<"Class_file"> | string
    storage_path?: StringFilter<"Class_file"> | string
    file_url?: StringNullableFilter<"Class_file"> | string | null
    file_type?: StringNullableFilter<"Class_file"> | string | null
    metadata?: JsonNullableFilter<"Class_file">
    class_id?: IntFilter<"Class_file"> | number
    Course_class?: XOR<Course_classScalarRelationFilter, Course_classWhereInput>
  }

  export type Class_fileOrderByWithRelationInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    class_id?: SortOrder
    Course_class?: Course_classOrderByWithRelationInput
  }

  export type Class_fileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number
    AND?: Class_fileWhereInput | Class_fileWhereInput[]
    OR?: Class_fileWhereInput[]
    NOT?: Class_fileWhereInput | Class_fileWhereInput[]
    display_name?: StringFilter<"Class_file"> | string
    storage_path?: StringFilter<"Class_file"> | string
    file_url?: StringNullableFilter<"Class_file"> | string | null
    file_type?: StringNullableFilter<"Class_file"> | string | null
    metadata?: JsonNullableFilter<"Class_file">
    class_id?: IntFilter<"Class_file"> | number
    Course_class?: XOR<Course_classScalarRelationFilter, Course_classWhereInput>
  }, "file_id">

  export type Class_fileOrderByWithAggregationInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    class_id?: SortOrder
    _count?: Class_fileCountOrderByAggregateInput
    _avg?: Class_fileAvgOrderByAggregateInput
    _max?: Class_fileMaxOrderByAggregateInput
    _min?: Class_fileMinOrderByAggregateInput
    _sum?: Class_fileSumOrderByAggregateInput
  }

  export type Class_fileScalarWhereWithAggregatesInput = {
    AND?: Class_fileScalarWhereWithAggregatesInput | Class_fileScalarWhereWithAggregatesInput[]
    OR?: Class_fileScalarWhereWithAggregatesInput[]
    NOT?: Class_fileScalarWhereWithAggregatesInput | Class_fileScalarWhereWithAggregatesInput[]
    file_id?: IntWithAggregatesFilter<"Class_file"> | number
    display_name?: StringWithAggregatesFilter<"Class_file"> | string
    storage_path?: StringWithAggregatesFilter<"Class_file"> | string
    file_url?: StringNullableWithAggregatesFilter<"Class_file"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"Class_file"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Class_file">
    class_id?: IntWithAggregatesFilter<"Class_file"> | number
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id_course?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    banner_url?: StringNullableFilter<"Course"> | string | null
    slug?: StringFilter<"Course"> | string
    fk_teacher?: UuidFilter<"Course"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Enrollment?: EnrollmentListRelationFilter
    Module?: ModuleListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrderInput | SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
    User?: UserOrderByWithRelationInput
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    Module?: ModuleOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id_course?: number
    slug?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    banner_url?: StringNullableFilter<"Course"> | string | null
    fk_teacher?: UuidFilter<"Course"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Enrollment?: EnrollmentListRelationFilter
    Module?: ModuleListRelationFilter
  }, "id_course" | "slug">

  export type CourseOrderByWithAggregationInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrderInput | SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id_course?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    banner_url?: StringNullableWithAggregatesFilter<"Course"> | string | null
    slug?: StringWithAggregatesFilter<"Course"> | string
    fk_teacher?: UuidWithAggregatesFilter<"Course"> | string
  }

  export type Course_classWhereInput = {
    AND?: Course_classWhereInput | Course_classWhereInput[]
    OR?: Course_classWhereInput[]
    NOT?: Course_classWhereInput | Course_classWhereInput[]
    class_id?: IntFilter<"Course_class"> | number
    title?: StringFilter<"Course_class"> | string
    description?: StringFilter<"Course_class"> | string
    index_order?: IntFilter<"Course_class"> | number
    fk_module?: IntFilter<"Course_class"> | number
    Class_file?: Class_fileListRelationFilter
    Module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    Student_progress?: Student_progressListRelationFilter
  }

  export type Course_classOrderByWithRelationInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
    Class_file?: Class_fileOrderByRelationAggregateInput
    Module?: ModuleOrderByWithRelationInput
    Student_progress?: Student_progressOrderByRelationAggregateInput
  }

  export type Course_classWhereUniqueInput = Prisma.AtLeast<{
    class_id?: number
    fk_module_index_order?: Course_classFk_moduleIndex_orderCompoundUniqueInput
    AND?: Course_classWhereInput | Course_classWhereInput[]
    OR?: Course_classWhereInput[]
    NOT?: Course_classWhereInput | Course_classWhereInput[]
    title?: StringFilter<"Course_class"> | string
    description?: StringFilter<"Course_class"> | string
    index_order?: IntFilter<"Course_class"> | number
    fk_module?: IntFilter<"Course_class"> | number
    Class_file?: Class_fileListRelationFilter
    Module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    Student_progress?: Student_progressListRelationFilter
  }, "class_id" | "fk_module_index_order">

  export type Course_classOrderByWithAggregationInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
    _count?: Course_classCountOrderByAggregateInput
    _avg?: Course_classAvgOrderByAggregateInput
    _max?: Course_classMaxOrderByAggregateInput
    _min?: Course_classMinOrderByAggregateInput
    _sum?: Course_classSumOrderByAggregateInput
  }

  export type Course_classScalarWhereWithAggregatesInput = {
    AND?: Course_classScalarWhereWithAggregatesInput | Course_classScalarWhereWithAggregatesInput[]
    OR?: Course_classScalarWhereWithAggregatesInput[]
    NOT?: Course_classScalarWhereWithAggregatesInput | Course_classScalarWhereWithAggregatesInput[]
    class_id?: IntWithAggregatesFilter<"Course_class"> | number
    title?: StringWithAggregatesFilter<"Course_class"> | string
    description?: StringWithAggregatesFilter<"Course_class"> | string
    index_order?: IntWithAggregatesFilter<"Course_class"> | number
    fk_module?: IntWithAggregatesFilter<"Course_class"> | number
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id_enrollment?: IntFilter<"Enrollment"> | number
    progress?: IntNullableFilter<"Enrollment"> | number | null
    enrolled_at?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    student_id?: UuidFilter<"Enrollment"> | string
    course_id?: IntFilter<"Enrollment"> | number
    Course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id_enrollment?: SortOrder
    progress?: SortOrderInput | SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
    Course?: CourseOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id_enrollment?: number
    student_id_course_id?: EnrollmentStudent_idCourse_idCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    progress?: IntNullableFilter<"Enrollment"> | number | null
    enrolled_at?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    student_id?: UuidFilter<"Enrollment"> | string
    course_id?: IntFilter<"Enrollment"> | number
    Course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_enrollment" | "student_id_course_id">

  export type EnrollmentOrderByWithAggregationInput = {
    id_enrollment?: SortOrder
    progress?: SortOrderInput | SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id_enrollment?: IntWithAggregatesFilter<"Enrollment"> | number
    progress?: IntNullableWithAggregatesFilter<"Enrollment"> | number | null
    enrolled_at?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
    student_id?: UuidWithAggregatesFilter<"Enrollment"> | string
    course_id?: IntWithAggregatesFilter<"Enrollment"> | number
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id_module?: IntFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    index_order?: IntFilter<"Module"> | number
    fk_course?: IntFilter<"Module"> | number
    Course_class?: Course_classListRelationFilter
    Course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type ModuleOrderByWithRelationInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
    Course_class?: Course_classOrderByRelationAggregateInput
    Course?: CourseOrderByWithRelationInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id_module?: number
    fk_course_index_order?: ModuleFk_courseIndex_orderCompoundUniqueInput
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    index_order?: IntFilter<"Module"> | number
    fk_course?: IntFilter<"Module"> | number
    Course_class?: Course_classListRelationFilter
    Course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id_module" | "fk_course_index_order">

  export type ModuleOrderByWithAggregationInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id_module?: IntWithAggregatesFilter<"Module"> | number
    title?: StringWithAggregatesFilter<"Module"> | string
    description?: StringWithAggregatesFilter<"Module"> | string
    index_order?: IntWithAggregatesFilter<"Module"> | number
    fk_course?: IntWithAggregatesFilter<"Module"> | number
  }

  export type Student_progressWhereInput = {
    AND?: Student_progressWhereInput | Student_progressWhereInput[]
    OR?: Student_progressWhereInput[]
    NOT?: Student_progressWhereInput | Student_progressWhereInput[]
    progress_id?: IntFilter<"Student_progress"> | number
    completed_at?: DateTimeNullableFilter<"Student_progress"> | Date | string | null
    class_id?: IntFilter<"Student_progress"> | number
    student_id?: UuidFilter<"Student_progress"> | string
    Course_class?: XOR<Course_classScalarRelationFilter, Course_classWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Student_progressOrderByWithRelationInput = {
    progress_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
    Course_class?: Course_classOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type Student_progressWhereUniqueInput = Prisma.AtLeast<{
    progress_id?: number
    student_id_class_id?: Student_progressStudent_idClass_idCompoundUniqueInput
    AND?: Student_progressWhereInput | Student_progressWhereInput[]
    OR?: Student_progressWhereInput[]
    NOT?: Student_progressWhereInput | Student_progressWhereInput[]
    completed_at?: DateTimeNullableFilter<"Student_progress"> | Date | string | null
    class_id?: IntFilter<"Student_progress"> | number
    student_id?: UuidFilter<"Student_progress"> | string
    Course_class?: XOR<Course_classScalarRelationFilter, Course_classWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "progress_id" | "student_id_class_id">

  export type Student_progressOrderByWithAggregationInput = {
    progress_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
    _count?: Student_progressCountOrderByAggregateInput
    _avg?: Student_progressAvgOrderByAggregateInput
    _max?: Student_progressMaxOrderByAggregateInput
    _min?: Student_progressMinOrderByAggregateInput
    _sum?: Student_progressSumOrderByAggregateInput
  }

  export type Student_progressScalarWhereWithAggregatesInput = {
    AND?: Student_progressScalarWhereWithAggregatesInput | Student_progressScalarWhereWithAggregatesInput[]
    OR?: Student_progressScalarWhereWithAggregatesInput[]
    NOT?: Student_progressScalarWhereWithAggregatesInput | Student_progressScalarWhereWithAggregatesInput[]
    progress_id?: IntWithAggregatesFilter<"Student_progress"> | number
    completed_at?: DateTimeNullableWithAggregatesFilter<"Student_progress"> | Date | string | null
    class_id?: IntWithAggregatesFilter<"Student_progress"> | number
    student_id?: UuidWithAggregatesFilter<"Student_progress"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_uuid?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: Enumuser_role_enumFilter<"User"> | $Enums.user_role_enum
    password_hash?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    Course?: CourseListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Student_progress?: Student_progressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    Course?: CourseOrderByRelationAggregateInput
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    Student_progress?: Student_progressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_uuid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: Enumuser_role_enumFilter<"User"> | $Enums.user_role_enum
    password_hash?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    Course?: CourseListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Student_progress?: Student_progressListRelationFilter
  }, "user_uuid" | "email">

  export type UserOrderByWithAggregationInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_uuid?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: Enumuser_role_enumWithAggregatesFilter<"User"> | $Enums.user_role_enum
    password_hash?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type Class_fileCreateInput = {
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Course_class: Course_classCreateNestedOneWithoutClass_fileInput
  }

  export type Class_fileUncheckedCreateInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id: number
  }

  export type Class_fileUpdateInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Course_class?: Course_classUpdateOneRequiredWithoutClass_fileNestedInput
  }

  export type Class_fileUncheckedUpdateInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type Class_fileCreateManyInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id: number
  }

  export type Class_fileUpdateManyMutationInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Class_fileUncheckedUpdateManyInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    User: UserCreateNestedOneWithoutCourseInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutCourseNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
  }

  export type Course_classCreateInput = {
    title: string
    description: string
    index_order: number
    Class_file?: Class_fileCreateNestedManyWithoutCourse_classInput
    Module: ModuleCreateNestedOneWithoutCourse_classInput
    Student_progress?: Student_progressCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classUncheckedCreateInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
    Class_file?: Class_fileUncheckedCreateNestedManyWithoutCourse_classInput
    Student_progress?: Student_progressUncheckedCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Class_file?: Class_fileUpdateManyWithoutCourse_classNestedInput
    Module?: ModuleUpdateOneRequiredWithoutCourse_classNestedInput
    Student_progress?: Student_progressUpdateManyWithoutCourse_classNestedInput
  }

  export type Course_classUncheckedUpdateInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
    Class_file?: Class_fileUncheckedUpdateManyWithoutCourse_classNestedInput
    Student_progress?: Student_progressUncheckedUpdateManyWithoutCourse_classNestedInput
  }

  export type Course_classCreateManyInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
  }

  export type Course_classUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type Course_classUncheckedUpdateManyInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateInput = {
    progress?: number | null
    enrolled_at?: Date | string | null
    Course: CourseCreateNestedOneWithoutEnrollmentInput
    User: UserCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
    course_id: number
  }

  export type EnrollmentUpdateInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
    User?: UserUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateManyInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
    course_id: number
  }

  export type EnrollmentUpdateManyMutationInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleCreateInput = {
    title: string
    description: string
    index_order: number
    Course_class?: Course_classCreateNestedManyWithoutModuleInput
    Course: CourseCreateNestedOneWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    fk_course: number
    Course_class?: Course_classUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Course_class?: Course_classUpdateManyWithoutModuleNestedInput
    Course?: CourseUpdateOneRequiredWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_course?: IntFieldUpdateOperationsInput | number
    Course_class?: Course_classUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    fk_course: number
  }

  export type ModuleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleUncheckedUpdateManyInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_course?: IntFieldUpdateOperationsInput | number
  }

  export type Student_progressCreateInput = {
    completed_at?: Date | string | null
    Course_class: Course_classCreateNestedOneWithoutStudent_progressInput
    User: UserCreateNestedOneWithoutStudent_progressInput
  }

  export type Student_progressUncheckedCreateInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
    student_id: string
  }

  export type Student_progressUpdateInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course_class?: Course_classUpdateOneRequiredWithoutStudent_progressNestedInput
    User?: UserUpdateOneRequiredWithoutStudent_progressNestedInput
  }

  export type Student_progressUncheckedUpdateInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type Student_progressCreateManyInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
    student_id: string
  }

  export type Student_progressUpdateManyMutationInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Student_progressUncheckedUpdateManyInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Course?: CourseCreateNestedManyWithoutUserInput
    Enrollment?: EnrollmentCreateNestedManyWithoutUserInput
    Student_progress?: Student_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Course?: CourseUncheckedCreateNestedManyWithoutUserInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    Student_progress?: Student_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUpdateManyWithoutUserNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutUserNestedInput
    Student_progress?: Student_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUncheckedUpdateManyWithoutUserNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    Student_progress?: Student_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type Course_classScalarRelationFilter = {
    is?: Course_classWhereInput
    isNot?: Course_classWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Class_fileCountOrderByAggregateInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    metadata?: SortOrder
    class_id?: SortOrder
  }

  export type Class_fileAvgOrderByAggregateInput = {
    file_id?: SortOrder
    class_id?: SortOrder
  }

  export type Class_fileMaxOrderByAggregateInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    class_id?: SortOrder
  }

  export type Class_fileMinOrderByAggregateInput = {
    file_id?: SortOrder
    display_name?: SortOrder
    storage_path?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    class_id?: SortOrder
  }

  export type Class_fileSumOrderByAggregateInput = {
    file_id?: SortOrder
    class_id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id_course?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id_course?: SortOrder
    title?: SortOrder
    description?: SortOrder
    banner_url?: SortOrder
    slug?: SortOrder
    fk_teacher?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id_course?: SortOrder
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

  export type Class_fileListRelationFilter = {
    every?: Class_fileWhereInput
    some?: Class_fileWhereInput
    none?: Class_fileWhereInput
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type Student_progressListRelationFilter = {
    every?: Student_progressWhereInput
    some?: Student_progressWhereInput
    none?: Student_progressWhereInput
  }

  export type Class_fileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Student_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Course_classFk_moduleIndex_orderCompoundUniqueInput = {
    fk_module: number
    index_order: number
  }

  export type Course_classCountOrderByAggregateInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type Course_classAvgOrderByAggregateInput = {
    class_id?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type Course_classMaxOrderByAggregateInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type Course_classMinOrderByAggregateInput = {
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
  }

  export type Course_classSumOrderByAggregateInput = {
    class_id?: SortOrder
    index_order?: SortOrder
    fk_module?: SortOrder
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrollmentStudent_idCourse_idCompoundUniqueInput = {
    student_id: string
    course_id: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    enrolled_at?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    course_id?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    enrolled_at?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id_enrollment?: SortOrder
    progress?: SortOrder
    enrolled_at?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
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

  export type Course_classListRelationFilter = {
    every?: Course_classWhereInput
    some?: Course_classWhereInput
    none?: Course_classWhereInput
  }

  export type Course_classOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleFk_courseIndex_orderCompoundUniqueInput = {
    fk_course: number
    index_order: number
  }

  export type ModuleCountOrderByAggregateInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id_module?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id_module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id_module?: SortOrder
    index_order?: SortOrder
    fk_course?: SortOrder
  }

  export type Student_progressStudent_idClass_idCompoundUniqueInput = {
    student_id: string
    class_id: number
  }

  export type Student_progressCountOrderByAggregateInput = {
    progress_id?: SortOrder
    completed_at?: SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
  }

  export type Student_progressAvgOrderByAggregateInput = {
    progress_id?: SortOrder
    class_id?: SortOrder
  }

  export type Student_progressMaxOrderByAggregateInput = {
    progress_id?: SortOrder
    completed_at?: SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
  }

  export type Student_progressMinOrderByAggregateInput = {
    progress_id?: SortOrder
    completed_at?: SortOrder
    class_id?: SortOrder
    student_id?: SortOrder
  }

  export type Student_progressSumOrderByAggregateInput = {
    progress_id?: SortOrder
    class_id?: SortOrder
  }

  export type Enumuser_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumFilter<$PrismaModel> | $Enums.user_role_enum
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_uuid?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
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

  export type Course_classCreateNestedOneWithoutClass_fileInput = {
    create?: XOR<Course_classCreateWithoutClass_fileInput, Course_classUncheckedCreateWithoutClass_fileInput>
    connectOrCreate?: Course_classCreateOrConnectWithoutClass_fileInput
    connect?: Course_classWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Course_classUpdateOneRequiredWithoutClass_fileNestedInput = {
    create?: XOR<Course_classCreateWithoutClass_fileInput, Course_classUncheckedCreateWithoutClass_fileInput>
    connectOrCreate?: Course_classCreateOrConnectWithoutClass_fileInput
    upsert?: Course_classUpsertWithoutClass_fileInput
    connect?: Course_classWhereUniqueInput
    update?: XOR<XOR<Course_classUpdateToOneWithWhereWithoutClass_fileInput, Course_classUpdateWithoutClass_fileInput>, Course_classUncheckedUpdateWithoutClass_fileInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutCourseInput = {
    create?: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput
    connect?: UserWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ModuleCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput
    upsert?: UserUpsertWithoutCourseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseInput, UserUpdateWithoutCourseInput>, UserUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ModuleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type Class_fileCreateNestedManyWithoutCourse_classInput = {
    create?: XOR<Class_fileCreateWithoutCourse_classInput, Class_fileUncheckedCreateWithoutCourse_classInput> | Class_fileCreateWithoutCourse_classInput[] | Class_fileUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Class_fileCreateOrConnectWithoutCourse_classInput | Class_fileCreateOrConnectWithoutCourse_classInput[]
    createMany?: Class_fileCreateManyCourse_classInputEnvelope
    connect?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
  }

  export type ModuleCreateNestedOneWithoutCourse_classInput = {
    create?: XOR<ModuleCreateWithoutCourse_classInput, ModuleUncheckedCreateWithoutCourse_classInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutCourse_classInput
    connect?: ModuleWhereUniqueInput
  }

  export type Student_progressCreateNestedManyWithoutCourse_classInput = {
    create?: XOR<Student_progressCreateWithoutCourse_classInput, Student_progressUncheckedCreateWithoutCourse_classInput> | Student_progressCreateWithoutCourse_classInput[] | Student_progressUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutCourse_classInput | Student_progressCreateOrConnectWithoutCourse_classInput[]
    createMany?: Student_progressCreateManyCourse_classInputEnvelope
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
  }

  export type Class_fileUncheckedCreateNestedManyWithoutCourse_classInput = {
    create?: XOR<Class_fileCreateWithoutCourse_classInput, Class_fileUncheckedCreateWithoutCourse_classInput> | Class_fileCreateWithoutCourse_classInput[] | Class_fileUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Class_fileCreateOrConnectWithoutCourse_classInput | Class_fileCreateOrConnectWithoutCourse_classInput[]
    createMany?: Class_fileCreateManyCourse_classInputEnvelope
    connect?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
  }

  export type Student_progressUncheckedCreateNestedManyWithoutCourse_classInput = {
    create?: XOR<Student_progressCreateWithoutCourse_classInput, Student_progressUncheckedCreateWithoutCourse_classInput> | Student_progressCreateWithoutCourse_classInput[] | Student_progressUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutCourse_classInput | Student_progressCreateOrConnectWithoutCourse_classInput[]
    createMany?: Student_progressCreateManyCourse_classInputEnvelope
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
  }

  export type Class_fileUpdateManyWithoutCourse_classNestedInput = {
    create?: XOR<Class_fileCreateWithoutCourse_classInput, Class_fileUncheckedCreateWithoutCourse_classInput> | Class_fileCreateWithoutCourse_classInput[] | Class_fileUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Class_fileCreateOrConnectWithoutCourse_classInput | Class_fileCreateOrConnectWithoutCourse_classInput[]
    upsert?: Class_fileUpsertWithWhereUniqueWithoutCourse_classInput | Class_fileUpsertWithWhereUniqueWithoutCourse_classInput[]
    createMany?: Class_fileCreateManyCourse_classInputEnvelope
    set?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    disconnect?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    delete?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    connect?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    update?: Class_fileUpdateWithWhereUniqueWithoutCourse_classInput | Class_fileUpdateWithWhereUniqueWithoutCourse_classInput[]
    updateMany?: Class_fileUpdateManyWithWhereWithoutCourse_classInput | Class_fileUpdateManyWithWhereWithoutCourse_classInput[]
    deleteMany?: Class_fileScalarWhereInput | Class_fileScalarWhereInput[]
  }

  export type ModuleUpdateOneRequiredWithoutCourse_classNestedInput = {
    create?: XOR<ModuleCreateWithoutCourse_classInput, ModuleUncheckedCreateWithoutCourse_classInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutCourse_classInput
    upsert?: ModuleUpsertWithoutCourse_classInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutCourse_classInput, ModuleUpdateWithoutCourse_classInput>, ModuleUncheckedUpdateWithoutCourse_classInput>
  }

  export type Student_progressUpdateManyWithoutCourse_classNestedInput = {
    create?: XOR<Student_progressCreateWithoutCourse_classInput, Student_progressUncheckedCreateWithoutCourse_classInput> | Student_progressCreateWithoutCourse_classInput[] | Student_progressUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutCourse_classInput | Student_progressCreateOrConnectWithoutCourse_classInput[]
    upsert?: Student_progressUpsertWithWhereUniqueWithoutCourse_classInput | Student_progressUpsertWithWhereUniqueWithoutCourse_classInput[]
    createMany?: Student_progressCreateManyCourse_classInputEnvelope
    set?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    disconnect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    delete?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    update?: Student_progressUpdateWithWhereUniqueWithoutCourse_classInput | Student_progressUpdateWithWhereUniqueWithoutCourse_classInput[]
    updateMany?: Student_progressUpdateManyWithWhereWithoutCourse_classInput | Student_progressUpdateManyWithWhereWithoutCourse_classInput[]
    deleteMany?: Student_progressScalarWhereInput | Student_progressScalarWhereInput[]
  }

  export type Class_fileUncheckedUpdateManyWithoutCourse_classNestedInput = {
    create?: XOR<Class_fileCreateWithoutCourse_classInput, Class_fileUncheckedCreateWithoutCourse_classInput> | Class_fileCreateWithoutCourse_classInput[] | Class_fileUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Class_fileCreateOrConnectWithoutCourse_classInput | Class_fileCreateOrConnectWithoutCourse_classInput[]
    upsert?: Class_fileUpsertWithWhereUniqueWithoutCourse_classInput | Class_fileUpsertWithWhereUniqueWithoutCourse_classInput[]
    createMany?: Class_fileCreateManyCourse_classInputEnvelope
    set?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    disconnect?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    delete?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    connect?: Class_fileWhereUniqueInput | Class_fileWhereUniqueInput[]
    update?: Class_fileUpdateWithWhereUniqueWithoutCourse_classInput | Class_fileUpdateWithWhereUniqueWithoutCourse_classInput[]
    updateMany?: Class_fileUpdateManyWithWhereWithoutCourse_classInput | Class_fileUpdateManyWithWhereWithoutCourse_classInput[]
    deleteMany?: Class_fileScalarWhereInput | Class_fileScalarWhereInput[]
  }

  export type Student_progressUncheckedUpdateManyWithoutCourse_classNestedInput = {
    create?: XOR<Student_progressCreateWithoutCourse_classInput, Student_progressUncheckedCreateWithoutCourse_classInput> | Student_progressCreateWithoutCourse_classInput[] | Student_progressUncheckedCreateWithoutCourse_classInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutCourse_classInput | Student_progressCreateOrConnectWithoutCourse_classInput[]
    upsert?: Student_progressUpsertWithWhereUniqueWithoutCourse_classInput | Student_progressUpsertWithWhereUniqueWithoutCourse_classInput[]
    createMany?: Student_progressCreateManyCourse_classInputEnvelope
    set?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    disconnect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    delete?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    update?: Student_progressUpdateWithWhereUniqueWithoutCourse_classInput | Student_progressUpdateWithWhereUniqueWithoutCourse_classInput[]
    updateMany?: Student_progressUpdateManyWithWhereWithoutCourse_classInput | Student_progressUpdateManyWithWhereWithoutCourse_classInput[]
    deleteMany?: Student_progressScalarWhereInput | Student_progressScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentInput
    upsert?: CourseUpsertWithoutEnrollmentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentInput, CourseUpdateWithoutEnrollmentInput>, CourseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentInput
    upsert?: UserUpsertWithoutEnrollmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentInput, UserUpdateWithoutEnrollmentInput>, UserUncheckedUpdateWithoutEnrollmentInput>
  }

  export type Course_classCreateNestedManyWithoutModuleInput = {
    create?: XOR<Course_classCreateWithoutModuleInput, Course_classUncheckedCreateWithoutModuleInput> | Course_classCreateWithoutModuleInput[] | Course_classUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: Course_classCreateOrConnectWithoutModuleInput | Course_classCreateOrConnectWithoutModuleInput[]
    createMany?: Course_classCreateManyModuleInputEnvelope
    connect?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutModuleInput = {
    create?: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModuleInput
    connect?: CourseWhereUniqueInput
  }

  export type Course_classUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<Course_classCreateWithoutModuleInput, Course_classUncheckedCreateWithoutModuleInput> | Course_classCreateWithoutModuleInput[] | Course_classUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: Course_classCreateOrConnectWithoutModuleInput | Course_classCreateOrConnectWithoutModuleInput[]
    createMany?: Course_classCreateManyModuleInputEnvelope
    connect?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
  }

  export type Course_classUpdateManyWithoutModuleNestedInput = {
    create?: XOR<Course_classCreateWithoutModuleInput, Course_classUncheckedCreateWithoutModuleInput> | Course_classCreateWithoutModuleInput[] | Course_classUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: Course_classCreateOrConnectWithoutModuleInput | Course_classCreateOrConnectWithoutModuleInput[]
    upsert?: Course_classUpsertWithWhereUniqueWithoutModuleInput | Course_classUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: Course_classCreateManyModuleInputEnvelope
    set?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    disconnect?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    delete?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    connect?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    update?: Course_classUpdateWithWhereUniqueWithoutModuleInput | Course_classUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: Course_classUpdateManyWithWhereWithoutModuleInput | Course_classUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: Course_classScalarWhereInput | Course_classScalarWhereInput[]
  }

  export type CourseUpdateOneRequiredWithoutModuleNestedInput = {
    create?: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModuleInput
    upsert?: CourseUpsertWithoutModuleInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutModuleInput, CourseUpdateWithoutModuleInput>, CourseUncheckedUpdateWithoutModuleInput>
  }

  export type Course_classUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<Course_classCreateWithoutModuleInput, Course_classUncheckedCreateWithoutModuleInput> | Course_classCreateWithoutModuleInput[] | Course_classUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: Course_classCreateOrConnectWithoutModuleInput | Course_classCreateOrConnectWithoutModuleInput[]
    upsert?: Course_classUpsertWithWhereUniqueWithoutModuleInput | Course_classUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: Course_classCreateManyModuleInputEnvelope
    set?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    disconnect?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    delete?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    connect?: Course_classWhereUniqueInput | Course_classWhereUniqueInput[]
    update?: Course_classUpdateWithWhereUniqueWithoutModuleInput | Course_classUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: Course_classUpdateManyWithWhereWithoutModuleInput | Course_classUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: Course_classScalarWhereInput | Course_classScalarWhereInput[]
  }

  export type Course_classCreateNestedOneWithoutStudent_progressInput = {
    create?: XOR<Course_classCreateWithoutStudent_progressInput, Course_classUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: Course_classCreateOrConnectWithoutStudent_progressInput
    connect?: Course_classWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudent_progressInput = {
    create?: XOR<UserCreateWithoutStudent_progressInput, UserUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudent_progressInput
    connect?: UserWhereUniqueInput
  }

  export type Course_classUpdateOneRequiredWithoutStudent_progressNestedInput = {
    create?: XOR<Course_classCreateWithoutStudent_progressInput, Course_classUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: Course_classCreateOrConnectWithoutStudent_progressInput
    upsert?: Course_classUpsertWithoutStudent_progressInput
    connect?: Course_classWhereUniqueInput
    update?: XOR<XOR<Course_classUpdateToOneWithWhereWithoutStudent_progressInput, Course_classUpdateWithoutStudent_progressInput>, Course_classUncheckedUpdateWithoutStudent_progressInput>
  }

  export type UserUpdateOneRequiredWithoutStudent_progressNestedInput = {
    create?: XOR<UserCreateWithoutStudent_progressInput, UserUncheckedCreateWithoutStudent_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudent_progressInput
    upsert?: UserUpsertWithoutStudent_progressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudent_progressInput, UserUpdateWithoutStudent_progressInput>, UserUncheckedUpdateWithoutStudent_progressInput>
  }

  export type CourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type Student_progressCreateNestedManyWithoutUserInput = {
    create?: XOR<Student_progressCreateWithoutUserInput, Student_progressUncheckedCreateWithoutUserInput> | Student_progressCreateWithoutUserInput[] | Student_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutUserInput | Student_progressCreateOrConnectWithoutUserInput[]
    createMany?: Student_progressCreateManyUserInputEnvelope
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type Student_progressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Student_progressCreateWithoutUserInput, Student_progressUncheckedCreateWithoutUserInput> | Student_progressCreateWithoutUserInput[] | Student_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutUserInput | Student_progressCreateOrConnectWithoutUserInput[]
    createMany?: Student_progressCreateManyUserInputEnvelope
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
  }

  export type Enumuser_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_role_enum
  }

  export type CourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type Student_progressUpdateManyWithoutUserNestedInput = {
    create?: XOR<Student_progressCreateWithoutUserInput, Student_progressUncheckedCreateWithoutUserInput> | Student_progressCreateWithoutUserInput[] | Student_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutUserInput | Student_progressCreateOrConnectWithoutUserInput[]
    upsert?: Student_progressUpsertWithWhereUniqueWithoutUserInput | Student_progressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Student_progressCreateManyUserInputEnvelope
    set?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    disconnect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    delete?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    update?: Student_progressUpdateWithWhereUniqueWithoutUserInput | Student_progressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Student_progressUpdateManyWithWhereWithoutUserInput | Student_progressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Student_progressScalarWhereInput | Student_progressScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type Student_progressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Student_progressCreateWithoutUserInput, Student_progressUncheckedCreateWithoutUserInput> | Student_progressCreateWithoutUserInput[] | Student_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Student_progressCreateOrConnectWithoutUserInput | Student_progressCreateOrConnectWithoutUserInput[]
    upsert?: Student_progressUpsertWithWhereUniqueWithoutUserInput | Student_progressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Student_progressCreateManyUserInputEnvelope
    set?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    disconnect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    delete?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    connect?: Student_progressWhereUniqueInput | Student_progressWhereUniqueInput[]
    update?: Student_progressUpdateWithWhereUniqueWithoutUserInput | Student_progressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Student_progressUpdateManyWithWhereWithoutUserInput | Student_progressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Student_progressScalarWhereInput | Student_progressScalarWhereInput[]
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

  export type NestedEnumuser_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumFilter<$PrismaModel> | $Enums.user_role_enum
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

  export type Course_classCreateWithoutClass_fileInput = {
    title: string
    description: string
    index_order: number
    Module: ModuleCreateNestedOneWithoutCourse_classInput
    Student_progress?: Student_progressCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classUncheckedCreateWithoutClass_fileInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
    Student_progress?: Student_progressUncheckedCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classCreateOrConnectWithoutClass_fileInput = {
    where: Course_classWhereUniqueInput
    create: XOR<Course_classCreateWithoutClass_fileInput, Course_classUncheckedCreateWithoutClass_fileInput>
  }

  export type Course_classUpsertWithoutClass_fileInput = {
    update: XOR<Course_classUpdateWithoutClass_fileInput, Course_classUncheckedUpdateWithoutClass_fileInput>
    create: XOR<Course_classCreateWithoutClass_fileInput, Course_classUncheckedCreateWithoutClass_fileInput>
    where?: Course_classWhereInput
  }

  export type Course_classUpdateToOneWithWhereWithoutClass_fileInput = {
    where?: Course_classWhereInput
    data: XOR<Course_classUpdateWithoutClass_fileInput, Course_classUncheckedUpdateWithoutClass_fileInput>
  }

  export type Course_classUpdateWithoutClass_fileInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Module?: ModuleUpdateOneRequiredWithoutCourse_classNestedInput
    Student_progress?: Student_progressUpdateManyWithoutCourse_classNestedInput
  }

  export type Course_classUncheckedUpdateWithoutClass_fileInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
    Student_progress?: Student_progressUncheckedUpdateManyWithoutCourse_classNestedInput
  }

  export type UserCreateWithoutCourseInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Enrollment?: EnrollmentCreateNestedManyWithoutUserInput
    Student_progress?: Student_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    Student_progress?: Student_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateWithoutCourseInput = {
    progress?: number | null
    enrolled_at?: Date | string | null
    User: UserCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ModuleCreateWithoutCourseInput = {
    title: string
    description: string
    index_order: number
    Course_class?: Course_classCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCourseInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    Course_class?: Course_classUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleCreateManyCourseInputEnvelope = {
    data: ModuleCreateManyCourseInput | ModuleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCourseInput = {
    update: XOR<UserUpdateWithoutCourseInput, UserUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseInput, UserUncheckedUpdateWithoutCourseInput>
  }

  export type UserUpdateWithoutCourseInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUpdateManyWithoutUserNestedInput
    Student_progress?: Student_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    Student_progress?: Student_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id_enrollment?: IntFilter<"Enrollment"> | number
    progress?: IntNullableFilter<"Enrollment"> | number | null
    enrolled_at?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    student_id?: UuidFilter<"Enrollment"> | string
    course_id?: IntFilter<"Enrollment"> | number
  }

  export type ModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
  }

  export type ModuleUpdateManyWithWhereWithoutCourseInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutCourseInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id_module?: IntFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    index_order?: IntFilter<"Module"> | number
    fk_course?: IntFilter<"Module"> | number
  }

  export type Class_fileCreateWithoutCourse_classInput = {
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Class_fileUncheckedCreateWithoutCourse_classInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Class_fileCreateOrConnectWithoutCourse_classInput = {
    where: Class_fileWhereUniqueInput
    create: XOR<Class_fileCreateWithoutCourse_classInput, Class_fileUncheckedCreateWithoutCourse_classInput>
  }

  export type Class_fileCreateManyCourse_classInputEnvelope = {
    data: Class_fileCreateManyCourse_classInput | Class_fileCreateManyCourse_classInput[]
    skipDuplicates?: boolean
  }

  export type ModuleCreateWithoutCourse_classInput = {
    title: string
    description: string
    index_order: number
    Course: CourseCreateNestedOneWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCourse_classInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
    fk_course: number
  }

  export type ModuleCreateOrConnectWithoutCourse_classInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCourse_classInput, ModuleUncheckedCreateWithoutCourse_classInput>
  }

  export type Student_progressCreateWithoutCourse_classInput = {
    completed_at?: Date | string | null
    User: UserCreateNestedOneWithoutStudent_progressInput
  }

  export type Student_progressUncheckedCreateWithoutCourse_classInput = {
    progress_id?: number
    completed_at?: Date | string | null
    student_id: string
  }

  export type Student_progressCreateOrConnectWithoutCourse_classInput = {
    where: Student_progressWhereUniqueInput
    create: XOR<Student_progressCreateWithoutCourse_classInput, Student_progressUncheckedCreateWithoutCourse_classInput>
  }

  export type Student_progressCreateManyCourse_classInputEnvelope = {
    data: Student_progressCreateManyCourse_classInput | Student_progressCreateManyCourse_classInput[]
    skipDuplicates?: boolean
  }

  export type Class_fileUpsertWithWhereUniqueWithoutCourse_classInput = {
    where: Class_fileWhereUniqueInput
    update: XOR<Class_fileUpdateWithoutCourse_classInput, Class_fileUncheckedUpdateWithoutCourse_classInput>
    create: XOR<Class_fileCreateWithoutCourse_classInput, Class_fileUncheckedCreateWithoutCourse_classInput>
  }

  export type Class_fileUpdateWithWhereUniqueWithoutCourse_classInput = {
    where: Class_fileWhereUniqueInput
    data: XOR<Class_fileUpdateWithoutCourse_classInput, Class_fileUncheckedUpdateWithoutCourse_classInput>
  }

  export type Class_fileUpdateManyWithWhereWithoutCourse_classInput = {
    where: Class_fileScalarWhereInput
    data: XOR<Class_fileUpdateManyMutationInput, Class_fileUncheckedUpdateManyWithoutCourse_classInput>
  }

  export type Class_fileScalarWhereInput = {
    AND?: Class_fileScalarWhereInput | Class_fileScalarWhereInput[]
    OR?: Class_fileScalarWhereInput[]
    NOT?: Class_fileScalarWhereInput | Class_fileScalarWhereInput[]
    file_id?: IntFilter<"Class_file"> | number
    display_name?: StringFilter<"Class_file"> | string
    storage_path?: StringFilter<"Class_file"> | string
    file_url?: StringNullableFilter<"Class_file"> | string | null
    file_type?: StringNullableFilter<"Class_file"> | string | null
    metadata?: JsonNullableFilter<"Class_file">
    class_id?: IntFilter<"Class_file"> | number
  }

  export type ModuleUpsertWithoutCourse_classInput = {
    update: XOR<ModuleUpdateWithoutCourse_classInput, ModuleUncheckedUpdateWithoutCourse_classInput>
    create: XOR<ModuleCreateWithoutCourse_classInput, ModuleUncheckedCreateWithoutCourse_classInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutCourse_classInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutCourse_classInput, ModuleUncheckedUpdateWithoutCourse_classInput>
  }

  export type ModuleUpdateWithoutCourse_classInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Course?: CourseUpdateOneRequiredWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCourse_classInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_course?: IntFieldUpdateOperationsInput | number
  }

  export type Student_progressUpsertWithWhereUniqueWithoutCourse_classInput = {
    where: Student_progressWhereUniqueInput
    update: XOR<Student_progressUpdateWithoutCourse_classInput, Student_progressUncheckedUpdateWithoutCourse_classInput>
    create: XOR<Student_progressCreateWithoutCourse_classInput, Student_progressUncheckedCreateWithoutCourse_classInput>
  }

  export type Student_progressUpdateWithWhereUniqueWithoutCourse_classInput = {
    where: Student_progressWhereUniqueInput
    data: XOR<Student_progressUpdateWithoutCourse_classInput, Student_progressUncheckedUpdateWithoutCourse_classInput>
  }

  export type Student_progressUpdateManyWithWhereWithoutCourse_classInput = {
    where: Student_progressScalarWhereInput
    data: XOR<Student_progressUpdateManyMutationInput, Student_progressUncheckedUpdateManyWithoutCourse_classInput>
  }

  export type Student_progressScalarWhereInput = {
    AND?: Student_progressScalarWhereInput | Student_progressScalarWhereInput[]
    OR?: Student_progressScalarWhereInput[]
    NOT?: Student_progressScalarWhereInput | Student_progressScalarWhereInput[]
    progress_id?: IntFilter<"Student_progress"> | number
    completed_at?: DateTimeNullableFilter<"Student_progress"> | Date | string | null
    class_id?: IntFilter<"Student_progress"> | number
    student_id?: UuidFilter<"Student_progress"> | string
  }

  export type CourseCreateWithoutEnrollmentInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    User: UserCreateNestedOneWithoutCourseInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
  }

  export type UserCreateWithoutEnrollmentInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Course?: CourseCreateNestedManyWithoutUserInput
    Student_progress?: Student_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Course?: CourseUncheckedCreateNestedManyWithoutUserInput
    Student_progress?: Student_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
  }

  export type CourseUpsertWithoutEnrollmentInput = {
    update: XOR<CourseUpdateWithoutEnrollmentInput, CourseUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentInput, CourseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type CourseUpdateWithoutEnrollmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutCourseNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutEnrollmentInput = {
    update: XOR<UserUpdateWithoutEnrollmentInput, UserUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentInput, UserUncheckedUpdateWithoutEnrollmentInput>
  }

  export type UserUpdateWithoutEnrollmentInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUpdateManyWithoutUserNestedInput
    Student_progress?: Student_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUncheckedUpdateManyWithoutUserNestedInput
    Student_progress?: Student_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Course_classCreateWithoutModuleInput = {
    title: string
    description: string
    index_order: number
    Class_file?: Class_fileCreateNestedManyWithoutCourse_classInput
    Student_progress?: Student_progressCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classUncheckedCreateWithoutModuleInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    Class_file?: Class_fileUncheckedCreateNestedManyWithoutCourse_classInput
    Student_progress?: Student_progressUncheckedCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classCreateOrConnectWithoutModuleInput = {
    where: Course_classWhereUniqueInput
    create: XOR<Course_classCreateWithoutModuleInput, Course_classUncheckedCreateWithoutModuleInput>
  }

  export type Course_classCreateManyModuleInputEnvelope = {
    data: Course_classCreateManyModuleInput | Course_classCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutModuleInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    User: UserCreateNestedOneWithoutCourseInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutModuleInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    fk_teacher: string
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutModuleInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
  }

  export type Course_classUpsertWithWhereUniqueWithoutModuleInput = {
    where: Course_classWhereUniqueInput
    update: XOR<Course_classUpdateWithoutModuleInput, Course_classUncheckedUpdateWithoutModuleInput>
    create: XOR<Course_classCreateWithoutModuleInput, Course_classUncheckedCreateWithoutModuleInput>
  }

  export type Course_classUpdateWithWhereUniqueWithoutModuleInput = {
    where: Course_classWhereUniqueInput
    data: XOR<Course_classUpdateWithoutModuleInput, Course_classUncheckedUpdateWithoutModuleInput>
  }

  export type Course_classUpdateManyWithWhereWithoutModuleInput = {
    where: Course_classScalarWhereInput
    data: XOR<Course_classUpdateManyMutationInput, Course_classUncheckedUpdateManyWithoutModuleInput>
  }

  export type Course_classScalarWhereInput = {
    AND?: Course_classScalarWhereInput | Course_classScalarWhereInput[]
    OR?: Course_classScalarWhereInput[]
    NOT?: Course_classScalarWhereInput | Course_classScalarWhereInput[]
    class_id?: IntFilter<"Course_class"> | number
    title?: StringFilter<"Course_class"> | string
    description?: StringFilter<"Course_class"> | string
    index_order?: IntFilter<"Course_class"> | number
    fk_module?: IntFilter<"Course_class"> | number
  }

  export type CourseUpsertWithoutModuleInput = {
    update: XOR<CourseUpdateWithoutModuleInput, CourseUncheckedUpdateWithoutModuleInput>
    create: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutModuleInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutModuleInput, CourseUncheckedUpdateWithoutModuleInput>
  }

  export type CourseUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutCourseNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutModuleInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    fk_teacher?: StringFieldUpdateOperationsInput | string
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type Course_classCreateWithoutStudent_progressInput = {
    title: string
    description: string
    index_order: number
    Class_file?: Class_fileCreateNestedManyWithoutCourse_classInput
    Module: ModuleCreateNestedOneWithoutCourse_classInput
  }

  export type Course_classUncheckedCreateWithoutStudent_progressInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
    fk_module: number
    Class_file?: Class_fileUncheckedCreateNestedManyWithoutCourse_classInput
  }

  export type Course_classCreateOrConnectWithoutStudent_progressInput = {
    where: Course_classWhereUniqueInput
    create: XOR<Course_classCreateWithoutStudent_progressInput, Course_classUncheckedCreateWithoutStudent_progressInput>
  }

  export type UserCreateWithoutStudent_progressInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Course?: CourseCreateNestedManyWithoutUserInput
    Enrollment?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudent_progressInput = {
    user_uuid?: string
    email: string
    role: $Enums.user_role_enum
    password_hash: string
    full_name: string
    avatar_url?: string | null
    created_at?: Date | string | null
    Course?: CourseUncheckedCreateNestedManyWithoutUserInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudent_progressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudent_progressInput, UserUncheckedCreateWithoutStudent_progressInput>
  }

  export type Course_classUpsertWithoutStudent_progressInput = {
    update: XOR<Course_classUpdateWithoutStudent_progressInput, Course_classUncheckedUpdateWithoutStudent_progressInput>
    create: XOR<Course_classCreateWithoutStudent_progressInput, Course_classUncheckedCreateWithoutStudent_progressInput>
    where?: Course_classWhereInput
  }

  export type Course_classUpdateToOneWithWhereWithoutStudent_progressInput = {
    where?: Course_classWhereInput
    data: XOR<Course_classUpdateWithoutStudent_progressInput, Course_classUncheckedUpdateWithoutStudent_progressInput>
  }

  export type Course_classUpdateWithoutStudent_progressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Class_file?: Class_fileUpdateManyWithoutCourse_classNestedInput
    Module?: ModuleUpdateOneRequiredWithoutCourse_classNestedInput
  }

  export type Course_classUncheckedUpdateWithoutStudent_progressInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    fk_module?: IntFieldUpdateOperationsInput | number
    Class_file?: Class_fileUncheckedUpdateManyWithoutCourse_classNestedInput
  }

  export type UserUpsertWithoutStudent_progressInput = {
    update: XOR<UserUpdateWithoutStudent_progressInput, UserUncheckedUpdateWithoutStudent_progressInput>
    create: XOR<UserCreateWithoutStudent_progressInput, UserUncheckedCreateWithoutStudent_progressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudent_progressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudent_progressInput, UserUncheckedUpdateWithoutStudent_progressInput>
  }

  export type UserUpdateWithoutStudent_progressInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUpdateManyWithoutUserNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudent_progressInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUncheckedUpdateManyWithoutUserNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseCreateWithoutUserInput = {
    title: string
    description: string
    banner_url?: string | null
    slug: string
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseCreateManyUserInputEnvelope = {
    data: CourseCreateManyUserInput | CourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutUserInput = {
    progress?: number | null
    enrolled_at?: Date | string | null
    Course: CourseCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    course_id: number
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Student_progressCreateWithoutUserInput = {
    completed_at?: Date | string | null
    Course_class: Course_classCreateNestedOneWithoutStudent_progressInput
  }

  export type Student_progressUncheckedCreateWithoutUserInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
  }

  export type Student_progressCreateOrConnectWithoutUserInput = {
    where: Student_progressWhereUniqueInput
    create: XOR<Student_progressCreateWithoutUserInput, Student_progressUncheckedCreateWithoutUserInput>
  }

  export type Student_progressCreateManyUserInputEnvelope = {
    data: Student_progressCreateManyUserInput | Student_progressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
  }

  export type CourseUpdateManyWithWhereWithoutUserInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id_course?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    banner_url?: StringNullableFilter<"Course"> | string | null
    slug?: StringFilter<"Course"> | string
    fk_teacher?: UuidFilter<"Course"> | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type Student_progressUpsertWithWhereUniqueWithoutUserInput = {
    where: Student_progressWhereUniqueInput
    update: XOR<Student_progressUpdateWithoutUserInput, Student_progressUncheckedUpdateWithoutUserInput>
    create: XOR<Student_progressCreateWithoutUserInput, Student_progressUncheckedCreateWithoutUserInput>
  }

  export type Student_progressUpdateWithWhereUniqueWithoutUserInput = {
    where: Student_progressWhereUniqueInput
    data: XOR<Student_progressUpdateWithoutUserInput, Student_progressUncheckedUpdateWithoutUserInput>
  }

  export type Student_progressUpdateManyWithWhereWithoutUserInput = {
    where: Student_progressScalarWhereInput
    data: XOR<Student_progressUpdateManyMutationInput, Student_progressUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentCreateManyCourseInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    student_id: string
  }

  export type ModuleCreateManyCourseInput = {
    id_module?: number
    title: string
    description: string
    index_order: number
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Course_class?: Course_classUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCourseInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Course_class?: Course_classUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutCourseInput = {
    id_module?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type Class_fileCreateManyCourse_classInput = {
    file_id?: number
    display_name: string
    storage_path: string
    file_url?: string | null
    file_type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Student_progressCreateManyCourse_classInput = {
    progress_id?: number
    completed_at?: Date | string | null
    student_id: string
  }

  export type Class_fileUpdateWithoutCourse_classInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Class_fileUncheckedUpdateWithoutCourse_classInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Class_fileUncheckedUpdateManyWithoutCourse_classInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Student_progressUpdateWithoutCourse_classInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutStudent_progressNestedInput
  }

  export type Student_progressUncheckedUpdateWithoutCourse_classInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type Student_progressUncheckedUpdateManyWithoutCourse_classInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: StringFieldUpdateOperationsInput | string
  }

  export type Course_classCreateManyModuleInput = {
    class_id?: number
    title: string
    description: string
    index_order: number
  }

  export type Course_classUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Class_file?: Class_fileUpdateManyWithoutCourse_classNestedInput
    Student_progress?: Student_progressUpdateManyWithoutCourse_classNestedInput
  }

  export type Course_classUncheckedUpdateWithoutModuleInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
    Class_file?: Class_fileUncheckedUpdateManyWithoutCourse_classNestedInput
    Student_progress?: Student_progressUncheckedUpdateManyWithoutCourse_classNestedInput
  }

  export type Course_classUncheckedUpdateManyWithoutModuleInput = {
    class_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    index_order?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateManyUserInput = {
    id_course?: number
    title: string
    description: string
    banner_url?: string | null
    slug: string
  }

  export type EnrollmentCreateManyUserInput = {
    id_enrollment?: number
    progress?: number | null
    enrolled_at?: Date | string | null
    course_id: number
  }

  export type Student_progressCreateManyUserInput = {
    progress_id?: number
    completed_at?: Date | string | null
    class_id: number
  }

  export type CourseUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutUserInput = {
    id_course?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id_enrollment?: IntFieldUpdateOperationsInput | number
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type Student_progressUpdateWithoutUserInput = {
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course_class?: Course_classUpdateOneRequiredWithoutStudent_progressNestedInput
  }

  export type Student_progressUncheckedUpdateWithoutUserInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type Student_progressUncheckedUpdateManyWithoutUserInput = {
    progress_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_id?: IntFieldUpdateOperationsInput | number
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