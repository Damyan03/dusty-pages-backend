
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ArticleCategory
 * 
 */
export type ArticleCategory = $Result.DefaultSelection<Prisma.$ArticleCategoryPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserArticle
 * 
 */
export type UserArticle = $Result.DefaultSelection<Prisma.$UserArticlePayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model ArticleView
 * 
 */
export type ArticleView = $Result.DefaultSelection<Prisma.$ArticleViewPayload>
/**
 * Model Era
 * 
 */
export type Era = $Result.DefaultSelection<Prisma.$EraPayload>
/**
 * Model ArticleEra
 * 
 */
export type ArticleEra = $Result.DefaultSelection<Prisma.$ArticleEraPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleCategory`: Exposes CRUD operations for the **ArticleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleCategories
    * const articleCategories = await prisma.articleCategory.findMany()
    * ```
    */
  get articleCategory(): Prisma.ArticleCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userArticle`: Exposes CRUD operations for the **UserArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserArticles
    * const userArticles = await prisma.userArticle.findMany()
    * ```
    */
  get userArticle(): Prisma.UserArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleView`: Exposes CRUD operations for the **ArticleView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleViews
    * const articleViews = await prisma.articleView.findMany()
    * ```
    */
  get articleView(): Prisma.ArticleViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.era`: Exposes CRUD operations for the **Era** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eras
    * const eras = await prisma.era.findMany()
    * ```
    */
  get era(): Prisma.EraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleEra`: Exposes CRUD operations for the **ArticleEra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleEras
    * const articleEras = await prisma.articleEra.findMany()
    * ```
    */
  get articleEra(): Prisma.ArticleEraDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Article: 'Article',
    Category: 'Category',
    ArticleCategory: 'ArticleCategory',
    User: 'User',
    UserArticle: 'UserArticle',
    Comments: 'Comments',
    ArticleView: 'ArticleView',
    Era: 'Era',
    ArticleEra: 'ArticleEra'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "article" | "category" | "articleCategory" | "user" | "userArticle" | "comments" | "articleView" | "era" | "articleEra"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ArticleCategory: {
        payload: Prisma.$ArticleCategoryPayload<ExtArgs>
        fields: Prisma.ArticleCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          findFirst: {
            args: Prisma.ArticleCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          findMany: {
            args: Prisma.ArticleCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>[]
          }
          create: {
            args: Prisma.ArticleCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          createMany: {
            args: Prisma.ArticleCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>[]
          }
          delete: {
            args: Prisma.ArticleCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          update: {
            args: Prisma.ArticleCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ArticleCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ArticleCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          aggregate: {
            args: Prisma.ArticleCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleCategory>
          }
          groupBy: {
            args: Prisma.ArticleCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCategoryCountAggregateOutputType> | number
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
      UserArticle: {
        payload: Prisma.$UserArticlePayload<ExtArgs>
        fields: Prisma.UserArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          findFirst: {
            args: Prisma.UserArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          findMany: {
            args: Prisma.UserArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>[]
          }
          create: {
            args: Prisma.UserArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          createMany: {
            args: Prisma.UserArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>[]
          }
          delete: {
            args: Prisma.UserArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          update: {
            args: Prisma.UserArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          deleteMany: {
            args: Prisma.UserArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>[]
          }
          upsert: {
            args: Prisma.UserArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          aggregate: {
            args: Prisma.UserArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserArticle>
          }
          groupBy: {
            args: Prisma.UserArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserArticleCountArgs<ExtArgs>
            result: $Utils.Optional<UserArticleCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      ArticleView: {
        payload: Prisma.$ArticleViewPayload<ExtArgs>
        fields: Prisma.ArticleViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>
          }
          findFirst: {
            args: Prisma.ArticleViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>
          }
          findMany: {
            args: Prisma.ArticleViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>[]
          }
          create: {
            args: Prisma.ArticleViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>
          }
          createMany: {
            args: Prisma.ArticleViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>[]
          }
          delete: {
            args: Prisma.ArticleViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>
          }
          update: {
            args: Prisma.ArticleViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>
          }
          deleteMany: {
            args: Prisma.ArticleViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>[]
          }
          upsert: {
            args: Prisma.ArticleViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleViewPayload>
          }
          aggregate: {
            args: Prisma.ArticleViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleView>
          }
          groupBy: {
            args: Prisma.ArticleViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleViewCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleViewCountAggregateOutputType> | number
          }
        }
      }
      Era: {
        payload: Prisma.$EraPayload<ExtArgs>
        fields: Prisma.EraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>
          }
          findFirst: {
            args: Prisma.EraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>
          }
          findMany: {
            args: Prisma.EraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>[]
          }
          create: {
            args: Prisma.EraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>
          }
          createMany: {
            args: Prisma.EraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>[]
          }
          delete: {
            args: Prisma.EraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>
          }
          update: {
            args: Prisma.EraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>
          }
          deleteMany: {
            args: Prisma.EraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>[]
          }
          upsert: {
            args: Prisma.EraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EraPayload>
          }
          aggregate: {
            args: Prisma.EraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEra>
          }
          groupBy: {
            args: Prisma.EraGroupByArgs<ExtArgs>
            result: $Utils.Optional<EraGroupByOutputType>[]
          }
          count: {
            args: Prisma.EraCountArgs<ExtArgs>
            result: $Utils.Optional<EraCountAggregateOutputType> | number
          }
        }
      }
      ArticleEra: {
        payload: Prisma.$ArticleEraPayload<ExtArgs>
        fields: Prisma.ArticleEraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleEraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleEraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>
          }
          findFirst: {
            args: Prisma.ArticleEraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleEraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>
          }
          findMany: {
            args: Prisma.ArticleEraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>[]
          }
          create: {
            args: Prisma.ArticleEraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>
          }
          createMany: {
            args: Prisma.ArticleEraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleEraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>[]
          }
          delete: {
            args: Prisma.ArticleEraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>
          }
          update: {
            args: Prisma.ArticleEraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>
          }
          deleteMany: {
            args: Prisma.ArticleEraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleEraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleEraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>[]
          }
          upsert: {
            args: Prisma.ArticleEraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEraPayload>
          }
          aggregate: {
            args: Prisma.ArticleEraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleEra>
          }
          groupBy: {
            args: Prisma.ArticleEraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleEraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleEraCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleEraCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    article?: ArticleOmit
    category?: CategoryOmit
    articleCategory?: ArticleCategoryOmit
    user?: UserOmit
    userArticle?: UserArticleOmit
    comments?: CommentsOmit
    articleView?: ArticleViewOmit
    era?: EraOmit
    articleEra?: ArticleEraOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    categories: number
    users: number
    comments: number
    views: number
    eras: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ArticleCountOutputTypeCountCategoriesArgs
    users?: boolean | ArticleCountOutputTypeCountUsersArgs
    comments?: boolean | ArticleCountOutputTypeCountCommentsArgs
    views?: boolean | ArticleCountOutputTypeCountViewsArgs
    eras?: boolean | ArticleCountOutputTypeCountErasArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCategoryWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserArticleWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleViewWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountErasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEraWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    articles: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | CategoryCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCategoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number
    comments: number
    views: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    views?: boolean | UserCountOutputTypeCountViewsArgs
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
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleViewWhereInput
  }


  /**
   * Count Type EraCountOutputType
   */

  export type EraCountOutputType = {
    articles: number
  }

  export type EraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | EraCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * EraCountOutputType without action
   */
  export type EraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EraCountOutputType
     */
    select?: EraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EraCountOutputType without action
   */
  export type EraCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    author: string | null
    date: Date | null
    contentDate: Date | null
    tags: string | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    author: string | null
    date: Date | null
    contentDate: Date | null
    tags: string | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    body: number
    author: number
    date: number
    contentDate: number
    tags: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    author?: true
    date?: true
    contentDate?: true
    tags?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    author?: true
    date?: true
    contentDate?: true
    tags?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    author?: true
    date?: true
    contentDate?: true
    tags?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    title: string
    body: string
    author: string
    date: Date
    contentDate: Date
    tags: string
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    author?: boolean
    date?: boolean
    contentDate?: boolean
    tags?: boolean
    categories?: boolean | Article$categoriesArgs<ExtArgs>
    users?: boolean | Article$usersArgs<ExtArgs>
    comments?: boolean | Article$commentsArgs<ExtArgs>
    views?: boolean | Article$viewsArgs<ExtArgs>
    eras?: boolean | Article$erasArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    author?: boolean
    date?: boolean
    contentDate?: boolean
    tags?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    author?: boolean
    date?: boolean
    contentDate?: boolean
    tags?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    author?: boolean
    date?: boolean
    contentDate?: boolean
    tags?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "author" | "date" | "contentDate" | "tags", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Article$categoriesArgs<ExtArgs>
    users?: boolean | Article$usersArgs<ExtArgs>
    comments?: boolean | Article$commentsArgs<ExtArgs>
    views?: boolean | Article$viewsArgs<ExtArgs>
    eras?: boolean | Article$erasArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      categories: Prisma.$ArticleCategoryPayload<ExtArgs>[]
      users: Prisma.$UserArticlePayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      views: Prisma.$ArticleViewPayload<ExtArgs>[]
      eras: Prisma.$ArticleEraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string
      author: string
      date: Date
      contentDate: Date
      tags: string
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Article$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Article$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Article$usersArgs<ExtArgs> = {}>(args?: Subset<T, Article$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Article$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Article$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Article$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Article$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eras<T extends Article$erasArgs<ExtArgs> = {}>(args?: Subset<T, Article$erasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'Int'>
    readonly title: FieldRef<"Article", 'String'>
    readonly body: FieldRef<"Article", 'String'>
    readonly author: FieldRef<"Article", 'String'>
    readonly date: FieldRef<"Article", 'DateTime'>
    readonly contentDate: FieldRef<"Article", 'DateTime'>
    readonly tags: FieldRef<"Article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.categories
   */
  export type Article$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    where?: ArticleCategoryWhereInput
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    cursor?: ArticleCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * Article.users
   */
  export type Article$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    where?: UserArticleWhereInput
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    cursor?: UserArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }

  /**
   * Article.comments
   */
  export type Article$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Article.views
   */
  export type Article$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    where?: ArticleViewWhereInput
    orderBy?: ArticleViewOrderByWithRelationInput | ArticleViewOrderByWithRelationInput[]
    cursor?: ArticleViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleViewScalarFieldEnum | ArticleViewScalarFieldEnum[]
  }

  /**
   * Article.eras
   */
  export type Article$erasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    where?: ArticleEraWhereInput
    orderBy?: ArticleEraOrderByWithRelationInput | ArticleEraOrderByWithRelationInput[]
    cursor?: ArticleEraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleEraScalarFieldEnum | ArticleEraScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articles?: boolean | Category$articlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Category$articlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      articles: Prisma.$ArticleCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Category$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Category$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.articles
   */
  export type Category$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    where?: ArticleCategoryWhereInput
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    cursor?: ArticleCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ArticleCategory
   */

  export type AggregateArticleCategory = {
    _count: ArticleCategoryCountAggregateOutputType | null
    _avg: ArticleCategoryAvgAggregateOutputType | null
    _sum: ArticleCategorySumAggregateOutputType | null
    _min: ArticleCategoryMinAggregateOutputType | null
    _max: ArticleCategoryMaxAggregateOutputType | null
  }

  export type ArticleCategoryAvgAggregateOutputType = {
    articleId: number | null
    categoryId: number | null
  }

  export type ArticleCategorySumAggregateOutputType = {
    articleId: number | null
    categoryId: number | null
  }

  export type ArticleCategoryMinAggregateOutputType = {
    articleId: number | null
    categoryId: number | null
  }

  export type ArticleCategoryMaxAggregateOutputType = {
    articleId: number | null
    categoryId: number | null
  }

  export type ArticleCategoryCountAggregateOutputType = {
    articleId: number
    categoryId: number
    _all: number
  }


  export type ArticleCategoryAvgAggregateInputType = {
    articleId?: true
    categoryId?: true
  }

  export type ArticleCategorySumAggregateInputType = {
    articleId?: true
    categoryId?: true
  }

  export type ArticleCategoryMinAggregateInputType = {
    articleId?: true
    categoryId?: true
  }

  export type ArticleCategoryMaxAggregateInputType = {
    articleId?: true
    categoryId?: true
  }

  export type ArticleCategoryCountAggregateInputType = {
    articleId?: true
    categoryId?: true
    _all?: true
  }

  export type ArticleCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategory to aggregate.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleCategories
    **/
    _count?: true | ArticleCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCategoryMaxAggregateInputType
  }

  export type GetArticleCategoryAggregateType<T extends ArticleCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleCategory[P]>
      : GetScalarType<T[P], AggregateArticleCategory[P]>
  }




  export type ArticleCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCategoryWhereInput
    orderBy?: ArticleCategoryOrderByWithAggregationInput | ArticleCategoryOrderByWithAggregationInput[]
    by: ArticleCategoryScalarFieldEnum[] | ArticleCategoryScalarFieldEnum
    having?: ArticleCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCategoryCountAggregateInputType | true
    _avg?: ArticleCategoryAvgAggregateInputType
    _sum?: ArticleCategorySumAggregateInputType
    _min?: ArticleCategoryMinAggregateInputType
    _max?: ArticleCategoryMaxAggregateInputType
  }

  export type ArticleCategoryGroupByOutputType = {
    articleId: number
    categoryId: number
    _count: ArticleCategoryCountAggregateOutputType | null
    _avg: ArticleCategoryAvgAggregateOutputType | null
    _sum: ArticleCategorySumAggregateOutputType | null
    _min: ArticleCategoryMinAggregateOutputType | null
    _max: ArticleCategoryMaxAggregateOutputType | null
  }

  type GetArticleCategoryGroupByPayload<T extends ArticleCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ArticleCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    categoryId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleCategory"]>

  export type ArticleCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    categoryId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleCategory"]>

  export type ArticleCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    categoryId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleCategory"]>

  export type ArticleCategorySelectScalar = {
    articleId?: boolean
    categoryId?: boolean
  }

  export type ArticleCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "categoryId", ExtArgs["result"]["articleCategory"]>
  export type ArticleCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ArticleCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ArticleCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ArticleCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleCategory"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      categoryId: number
    }, ExtArgs["result"]["articleCategory"]>
    composites: {}
  }

  type ArticleCategoryGetPayload<S extends boolean | null | undefined | ArticleCategoryDefaultArgs> = $Result.GetResult<Prisma.$ArticleCategoryPayload, S>

  type ArticleCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCategoryCountAggregateInputType | true
    }

  export interface ArticleCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleCategory'], meta: { name: 'ArticleCategory' } }
    /**
     * Find zero or one ArticleCategory that matches the filter.
     * @param {ArticleCategoryFindUniqueArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleCategoryFindUniqueArgs>(args: SelectSubset<T, ArticleCategoryFindUniqueArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleCategoryFindUniqueOrThrowArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindFirstArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleCategoryFindFirstArgs>(args?: SelectSubset<T, ArticleCategoryFindFirstArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindFirstOrThrowArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleCategories
     * const articleCategories = await prisma.articleCategory.findMany()
     * 
     * // Get first 10 ArticleCategories
     * const articleCategories = await prisma.articleCategory.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleCategoryWithArticleIdOnly = await prisma.articleCategory.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleCategoryFindManyArgs>(args?: SelectSubset<T, ArticleCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleCategory.
     * @param {ArticleCategoryCreateArgs} args - Arguments to create a ArticleCategory.
     * @example
     * // Create one ArticleCategory
     * const ArticleCategory = await prisma.articleCategory.create({
     *   data: {
     *     // ... data to create a ArticleCategory
     *   }
     * })
     * 
     */
    create<T extends ArticleCategoryCreateArgs>(args: SelectSubset<T, ArticleCategoryCreateArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleCategories.
     * @param {ArticleCategoryCreateManyArgs} args - Arguments to create many ArticleCategories.
     * @example
     * // Create many ArticleCategories
     * const articleCategory = await prisma.articleCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCategoryCreateManyArgs>(args?: SelectSubset<T, ArticleCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleCategories and returns the data saved in the database.
     * @param {ArticleCategoryCreateManyAndReturnArgs} args - Arguments to create many ArticleCategories.
     * @example
     * // Create many ArticleCategories
     * const articleCategory = await prisma.articleCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleCategories and only return the `articleId`
     * const articleCategoryWithArticleIdOnly = await prisma.articleCategory.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleCategory.
     * @param {ArticleCategoryDeleteArgs} args - Arguments to delete one ArticleCategory.
     * @example
     * // Delete one ArticleCategory
     * const ArticleCategory = await prisma.articleCategory.delete({
     *   where: {
     *     // ... filter to delete one ArticleCategory
     *   }
     * })
     * 
     */
    delete<T extends ArticleCategoryDeleteArgs>(args: SelectSubset<T, ArticleCategoryDeleteArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleCategory.
     * @param {ArticleCategoryUpdateArgs} args - Arguments to update one ArticleCategory.
     * @example
     * // Update one ArticleCategory
     * const articleCategory = await prisma.articleCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleCategoryUpdateArgs>(args: SelectSubset<T, ArticleCategoryUpdateArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleCategories.
     * @param {ArticleCategoryDeleteManyArgs} args - Arguments to filter ArticleCategories to delete.
     * @example
     * // Delete a few ArticleCategories
     * const { count } = await prisma.articleCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleCategoryDeleteManyArgs>(args?: SelectSubset<T, ArticleCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleCategories
     * const articleCategory = await prisma.articleCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleCategoryUpdateManyArgs>(args: SelectSubset<T, ArticleCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleCategories and returns the data updated in the database.
     * @param {ArticleCategoryUpdateManyAndReturnArgs} args - Arguments to update many ArticleCategories.
     * @example
     * // Update many ArticleCategories
     * const articleCategory = await prisma.articleCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleCategories and only return the `articleId`
     * const articleCategoryWithArticleIdOnly = await prisma.articleCategory.updateManyAndReturn({
     *   select: { articleId: true },
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
    updateManyAndReturn<T extends ArticleCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleCategory.
     * @param {ArticleCategoryUpsertArgs} args - Arguments to update or create a ArticleCategory.
     * @example
     * // Update or create a ArticleCategory
     * const articleCategory = await prisma.articleCategory.upsert({
     *   create: {
     *     // ... data to create a ArticleCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleCategory we want to update
     *   }
     * })
     */
    upsert<T extends ArticleCategoryUpsertArgs>(args: SelectSubset<T, ArticleCategoryUpsertArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryCountArgs} args - Arguments to filter ArticleCategories to count.
     * @example
     * // Count the number of ArticleCategories
     * const count = await prisma.articleCategory.count({
     *   where: {
     *     // ... the filter for the ArticleCategories we want to count
     *   }
     * })
    **/
    count<T extends ArticleCategoryCountArgs>(
      args?: Subset<T, ArticleCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleCategoryAggregateArgs>(args: Subset<T, ArticleCategoryAggregateArgs>): Prisma.PrismaPromise<GetArticleCategoryAggregateType<T>>

    /**
     * Group by ArticleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryGroupByArgs} args - Group by arguments.
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
      T extends ArticleCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleCategory model
   */
  readonly fields: ArticleCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleCategory model
   */
  interface ArticleCategoryFieldRefs {
    readonly articleId: FieldRef<"ArticleCategory", 'Int'>
    readonly categoryId: FieldRef<"ArticleCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArticleCategory findUnique
   */
  export type ArticleCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory findUniqueOrThrow
   */
  export type ArticleCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory findFirst
   */
  export type ArticleCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory findFirstOrThrow
   */
  export type ArticleCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory findMany
   */
  export type ArticleCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory create
   */
  export type ArticleCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleCategory.
     */
    data: XOR<ArticleCategoryCreateInput, ArticleCategoryUncheckedCreateInput>
  }

  /**
   * ArticleCategory createMany
   */
  export type ArticleCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleCategories.
     */
    data: ArticleCategoryCreateManyInput | ArticleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleCategory createManyAndReturn
   */
  export type ArticleCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleCategories.
     */
    data: ArticleCategoryCreateManyInput | ArticleCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleCategory update
   */
  export type ArticleCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleCategory.
     */
    data: XOR<ArticleCategoryUpdateInput, ArticleCategoryUncheckedUpdateInput>
    /**
     * Choose, which ArticleCategory to update.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory updateMany
   */
  export type ArticleCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleCategories.
     */
    data: XOR<ArticleCategoryUpdateManyMutationInput, ArticleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ArticleCategories to update
     */
    where?: ArticleCategoryWhereInput
    /**
     * Limit how many ArticleCategories to update.
     */
    limit?: number
  }

  /**
   * ArticleCategory updateManyAndReturn
   */
  export type ArticleCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ArticleCategories.
     */
    data: XOR<ArticleCategoryUpdateManyMutationInput, ArticleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ArticleCategories to update
     */
    where?: ArticleCategoryWhereInput
    /**
     * Limit how many ArticleCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleCategory upsert
   */
  export type ArticleCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleCategory to update in case it exists.
     */
    where: ArticleCategoryWhereUniqueInput
    /**
     * In case the ArticleCategory found by the `where` argument doesn't exist, create a new ArticleCategory with this data.
     */
    create: XOR<ArticleCategoryCreateInput, ArticleCategoryUncheckedCreateInput>
    /**
     * In case the ArticleCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCategoryUpdateInput, ArticleCategoryUncheckedUpdateInput>
  }

  /**
   * ArticleCategory delete
   */
  export type ArticleCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter which ArticleCategory to delete.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory deleteMany
   */
  export type ArticleCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategories to delete
     */
    where?: ArticleCategoryWhereInput
    /**
     * Limit how many ArticleCategories to delete.
     */
    limit?: number
  }

  /**
   * ArticleCategory without action
   */
  export type ArticleCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    displayName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    displayName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    displayName: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    id?: boolean
    username?: boolean
    displayName?: boolean
    articles?: boolean | User$articlesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "displayName", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      articles: Prisma.$UserArticlePayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      views: Prisma.$ArticleViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      displayName: string
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends User$viewsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
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
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    where?: UserArticleWhereInput
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    cursor?: UserArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * User.views
   */
  export type User$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    where?: ArticleViewWhereInput
    orderBy?: ArticleViewOrderByWithRelationInput | ArticleViewOrderByWithRelationInput[]
    cursor?: ArticleViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleViewScalarFieldEnum | ArticleViewScalarFieldEnum[]
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
   * Model UserArticle
   */

  export type AggregateUserArticle = {
    _count: UserArticleCountAggregateOutputType | null
    _avg: UserArticleAvgAggregateOutputType | null
    _sum: UserArticleSumAggregateOutputType | null
    _min: UserArticleMinAggregateOutputType | null
    _max: UserArticleMaxAggregateOutputType | null
  }

  export type UserArticleAvgAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type UserArticleSumAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type UserArticleMinAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type UserArticleMaxAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type UserArticleCountAggregateOutputType = {
    articleId: number
    userId: number
    _all: number
  }


  export type UserArticleAvgAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type UserArticleSumAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type UserArticleMinAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type UserArticleMaxAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type UserArticleCountAggregateInputType = {
    articleId?: true
    userId?: true
    _all?: true
  }

  export type UserArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserArticle to aggregate.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserArticles
    **/
    _count?: true | UserArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserArticleMaxAggregateInputType
  }

  export type GetUserArticleAggregateType<T extends UserArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserArticle[P]>
      : GetScalarType<T[P], AggregateUserArticle[P]>
  }




  export type UserArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserArticleWhereInput
    orderBy?: UserArticleOrderByWithAggregationInput | UserArticleOrderByWithAggregationInput[]
    by: UserArticleScalarFieldEnum[] | UserArticleScalarFieldEnum
    having?: UserArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserArticleCountAggregateInputType | true
    _avg?: UserArticleAvgAggregateInputType
    _sum?: UserArticleSumAggregateInputType
    _min?: UserArticleMinAggregateInputType
    _max?: UserArticleMaxAggregateInputType
  }

  export type UserArticleGroupByOutputType = {
    articleId: number
    userId: number
    _count: UserArticleCountAggregateOutputType | null
    _avg: UserArticleAvgAggregateOutputType | null
    _sum: UserArticleSumAggregateOutputType | null
    _min: UserArticleMinAggregateOutputType | null
    _max: UserArticleMaxAggregateOutputType | null
  }

  type GetUserArticleGroupByPayload<T extends UserArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserArticleGroupByOutputType[P]>
            : GetScalarType<T[P], UserArticleGroupByOutputType[P]>
        }
      >
    >


  export type UserArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userArticle"]>

  export type UserArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userArticle"]>

  export type UserArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userArticle"]>

  export type UserArticleSelectScalar = {
    articleId?: boolean
    userId?: boolean
  }

  export type UserArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "userId", ExtArgs["result"]["userArticle"]>
  export type UserArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserArticle"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      userId: number
    }, ExtArgs["result"]["userArticle"]>
    composites: {}
  }

  type UserArticleGetPayload<S extends boolean | null | undefined | UserArticleDefaultArgs> = $Result.GetResult<Prisma.$UserArticlePayload, S>

  type UserArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserArticleCountAggregateInputType | true
    }

  export interface UserArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserArticle'], meta: { name: 'UserArticle' } }
    /**
     * Find zero or one UserArticle that matches the filter.
     * @param {UserArticleFindUniqueArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserArticleFindUniqueArgs>(args: SelectSubset<T, UserArticleFindUniqueArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserArticleFindUniqueOrThrowArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleFindFirstArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserArticleFindFirstArgs>(args?: SelectSubset<T, UserArticleFindFirstArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleFindFirstOrThrowArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserArticles
     * const userArticles = await prisma.userArticle.findMany()
     * 
     * // Get first 10 UserArticles
     * const userArticles = await prisma.userArticle.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const userArticleWithArticleIdOnly = await prisma.userArticle.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends UserArticleFindManyArgs>(args?: SelectSubset<T, UserArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserArticle.
     * @param {UserArticleCreateArgs} args - Arguments to create a UserArticle.
     * @example
     * // Create one UserArticle
     * const UserArticle = await prisma.userArticle.create({
     *   data: {
     *     // ... data to create a UserArticle
     *   }
     * })
     * 
     */
    create<T extends UserArticleCreateArgs>(args: SelectSubset<T, UserArticleCreateArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserArticles.
     * @param {UserArticleCreateManyArgs} args - Arguments to create many UserArticles.
     * @example
     * // Create many UserArticles
     * const userArticle = await prisma.userArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserArticleCreateManyArgs>(args?: SelectSubset<T, UserArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserArticles and returns the data saved in the database.
     * @param {UserArticleCreateManyAndReturnArgs} args - Arguments to create many UserArticles.
     * @example
     * // Create many UserArticles
     * const userArticle = await prisma.userArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserArticles and only return the `articleId`
     * const userArticleWithArticleIdOnly = await prisma.userArticle.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserArticle.
     * @param {UserArticleDeleteArgs} args - Arguments to delete one UserArticle.
     * @example
     * // Delete one UserArticle
     * const UserArticle = await prisma.userArticle.delete({
     *   where: {
     *     // ... filter to delete one UserArticle
     *   }
     * })
     * 
     */
    delete<T extends UserArticleDeleteArgs>(args: SelectSubset<T, UserArticleDeleteArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserArticle.
     * @param {UserArticleUpdateArgs} args - Arguments to update one UserArticle.
     * @example
     * // Update one UserArticle
     * const userArticle = await prisma.userArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserArticleUpdateArgs>(args: SelectSubset<T, UserArticleUpdateArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserArticles.
     * @param {UserArticleDeleteManyArgs} args - Arguments to filter UserArticles to delete.
     * @example
     * // Delete a few UserArticles
     * const { count } = await prisma.userArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserArticleDeleteManyArgs>(args?: SelectSubset<T, UserArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserArticles
     * const userArticle = await prisma.userArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserArticleUpdateManyArgs>(args: SelectSubset<T, UserArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserArticles and returns the data updated in the database.
     * @param {UserArticleUpdateManyAndReturnArgs} args - Arguments to update many UserArticles.
     * @example
     * // Update many UserArticles
     * const userArticle = await prisma.userArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserArticles and only return the `articleId`
     * const userArticleWithArticleIdOnly = await prisma.userArticle.updateManyAndReturn({
     *   select: { articleId: true },
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
    updateManyAndReturn<T extends UserArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserArticle.
     * @param {UserArticleUpsertArgs} args - Arguments to update or create a UserArticle.
     * @example
     * // Update or create a UserArticle
     * const userArticle = await prisma.userArticle.upsert({
     *   create: {
     *     // ... data to create a UserArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserArticle we want to update
     *   }
     * })
     */
    upsert<T extends UserArticleUpsertArgs>(args: SelectSubset<T, UserArticleUpsertArgs<ExtArgs>>): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleCountArgs} args - Arguments to filter UserArticles to count.
     * @example
     * // Count the number of UserArticles
     * const count = await prisma.userArticle.count({
     *   where: {
     *     // ... the filter for the UserArticles we want to count
     *   }
     * })
    **/
    count<T extends UserArticleCountArgs>(
      args?: Subset<T, UserArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserArticleAggregateArgs>(args: Subset<T, UserArticleAggregateArgs>): Prisma.PrismaPromise<GetUserArticleAggregateType<T>>

    /**
     * Group by UserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleGroupByArgs} args - Group by arguments.
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
      T extends UserArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserArticleGroupByArgs['orderBy'] }
        : { orderBy?: UserArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserArticle model
   */
  readonly fields: UserArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserArticle model
   */
  interface UserArticleFieldRefs {
    readonly articleId: FieldRef<"UserArticle", 'Int'>
    readonly userId: FieldRef<"UserArticle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserArticle findUnique
   */
  export type UserArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where: UserArticleWhereUniqueInput
  }

  /**
   * UserArticle findUniqueOrThrow
   */
  export type UserArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where: UserArticleWhereUniqueInput
  }

  /**
   * UserArticle findFirst
   */
  export type UserArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserArticles.
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserArticles.
     */
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }

  /**
   * UserArticle findFirstOrThrow
   */
  export type UserArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserArticles.
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserArticles.
     */
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }

  /**
   * UserArticle findMany
   */
  export type UserArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticles to fetch.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserArticles.
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }

  /**
   * UserArticle create
   */
  export type UserArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserArticle.
     */
    data: XOR<UserArticleCreateInput, UserArticleUncheckedCreateInput>
  }

  /**
   * UserArticle createMany
   */
  export type UserArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserArticles.
     */
    data: UserArticleCreateManyInput | UserArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserArticle createManyAndReturn
   */
  export type UserArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * The data used to create many UserArticles.
     */
    data: UserArticleCreateManyInput | UserArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserArticle update
   */
  export type UserArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserArticle.
     */
    data: XOR<UserArticleUpdateInput, UserArticleUncheckedUpdateInput>
    /**
     * Choose, which UserArticle to update.
     */
    where: UserArticleWhereUniqueInput
  }

  /**
   * UserArticle updateMany
   */
  export type UserArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserArticles.
     */
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyInput>
    /**
     * Filter which UserArticles to update
     */
    where?: UserArticleWhereInput
    /**
     * Limit how many UserArticles to update.
     */
    limit?: number
  }

  /**
   * UserArticle updateManyAndReturn
   */
  export type UserArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * The data used to update UserArticles.
     */
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyInput>
    /**
     * Filter which UserArticles to update
     */
    where?: UserArticleWhereInput
    /**
     * Limit how many UserArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserArticle upsert
   */
  export type UserArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserArticle to update in case it exists.
     */
    where: UserArticleWhereUniqueInput
    /**
     * In case the UserArticle found by the `where` argument doesn't exist, create a new UserArticle with this data.
     */
    create: XOR<UserArticleCreateInput, UserArticleUncheckedCreateInput>
    /**
     * In case the UserArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserArticleUpdateInput, UserArticleUncheckedUpdateInput>
  }

  /**
   * UserArticle delete
   */
  export type UserArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter which UserArticle to delete.
     */
    where: UserArticleWhereUniqueInput
  }

  /**
   * UserArticle deleteMany
   */
  export type UserArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserArticles to delete
     */
    where?: UserArticleWhereInput
    /**
     * Limit how many UserArticles to delete.
     */
    limit?: number
  }

  /**
   * UserArticle without action
   */
  export type UserArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserArticle
     */
    omit?: UserArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserArticleInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
    body: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
    body: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    articleId: number
    userId: number
    body: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    body?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    body?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    body?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    articleId: number
    userId: number
    body: string
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    body?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    body?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    body?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    articleId?: boolean
    userId?: boolean
    body?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "userId" | "body", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      articleId: number
      userId: number
      body: string
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly articleId: FieldRef<"Comments", 'Int'>
    readonly userId: FieldRef<"Comments", 'Int'>
    readonly body: FieldRef<"Comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model ArticleView
   */

  export type AggregateArticleView = {
    _count: ArticleViewCountAggregateOutputType | null
    _avg: ArticleViewAvgAggregateOutputType | null
    _sum: ArticleViewSumAggregateOutputType | null
    _min: ArticleViewMinAggregateOutputType | null
    _max: ArticleViewMaxAggregateOutputType | null
  }

  export type ArticleViewAvgAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type ArticleViewSumAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type ArticleViewMinAggregateOutputType = {
    articleId: number | null
    userId: number | null
    viewedAt: Date | null
  }

  export type ArticleViewMaxAggregateOutputType = {
    articleId: number | null
    userId: number | null
    viewedAt: Date | null
  }

  export type ArticleViewCountAggregateOutputType = {
    articleId: number
    userId: number
    viewedAt: number
    _all: number
  }


  export type ArticleViewAvgAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type ArticleViewSumAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type ArticleViewMinAggregateInputType = {
    articleId?: true
    userId?: true
    viewedAt?: true
  }

  export type ArticleViewMaxAggregateInputType = {
    articleId?: true
    userId?: true
    viewedAt?: true
  }

  export type ArticleViewCountAggregateInputType = {
    articleId?: true
    userId?: true
    viewedAt?: true
    _all?: true
  }

  export type ArticleViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleView to aggregate.
     */
    where?: ArticleViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleViews to fetch.
     */
    orderBy?: ArticleViewOrderByWithRelationInput | ArticleViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleViews
    **/
    _count?: true | ArticleViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleViewMaxAggregateInputType
  }

  export type GetArticleViewAggregateType<T extends ArticleViewAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleView[P]>
      : GetScalarType<T[P], AggregateArticleView[P]>
  }




  export type ArticleViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleViewWhereInput
    orderBy?: ArticleViewOrderByWithAggregationInput | ArticleViewOrderByWithAggregationInput[]
    by: ArticleViewScalarFieldEnum[] | ArticleViewScalarFieldEnum
    having?: ArticleViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleViewCountAggregateInputType | true
    _avg?: ArticleViewAvgAggregateInputType
    _sum?: ArticleViewSumAggregateInputType
    _min?: ArticleViewMinAggregateInputType
    _max?: ArticleViewMaxAggregateInputType
  }

  export type ArticleViewGroupByOutputType = {
    articleId: number
    userId: number
    viewedAt: Date
    _count: ArticleViewCountAggregateOutputType | null
    _avg: ArticleViewAvgAggregateOutputType | null
    _sum: ArticleViewSumAggregateOutputType | null
    _min: ArticleViewMinAggregateOutputType | null
    _max: ArticleViewMaxAggregateOutputType | null
  }

  type GetArticleViewGroupByPayload<T extends ArticleViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleViewGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleViewGroupByOutputType[P]>
        }
      >
    >


  export type ArticleViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    viewedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleView"]>

  export type ArticleViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    viewedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleView"]>

  export type ArticleViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    viewedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleView"]>

  export type ArticleViewSelectScalar = {
    articleId?: boolean
    userId?: boolean
    viewedAt?: boolean
  }

  export type ArticleViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "userId" | "viewedAt", ExtArgs["result"]["articleView"]>
  export type ArticleViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticleViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleView"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      userId: number
      viewedAt: Date
    }, ExtArgs["result"]["articleView"]>
    composites: {}
  }

  type ArticleViewGetPayload<S extends boolean | null | undefined | ArticleViewDefaultArgs> = $Result.GetResult<Prisma.$ArticleViewPayload, S>

  type ArticleViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleViewCountAggregateInputType | true
    }

  export interface ArticleViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleView'], meta: { name: 'ArticleView' } }
    /**
     * Find zero or one ArticleView that matches the filter.
     * @param {ArticleViewFindUniqueArgs} args - Arguments to find a ArticleView
     * @example
     * // Get one ArticleView
     * const articleView = await prisma.articleView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleViewFindUniqueArgs>(args: SelectSubset<T, ArticleViewFindUniqueArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleViewFindUniqueOrThrowArgs} args - Arguments to find a ArticleView
     * @example
     * // Get one ArticleView
     * const articleView = await prisma.articleView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewFindFirstArgs} args - Arguments to find a ArticleView
     * @example
     * // Get one ArticleView
     * const articleView = await prisma.articleView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleViewFindFirstArgs>(args?: SelectSubset<T, ArticleViewFindFirstArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewFindFirstOrThrowArgs} args - Arguments to find a ArticleView
     * @example
     * // Get one ArticleView
     * const articleView = await prisma.articleView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleViews
     * const articleViews = await prisma.articleView.findMany()
     * 
     * // Get first 10 ArticleViews
     * const articleViews = await prisma.articleView.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleViewWithArticleIdOnly = await prisma.articleView.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleViewFindManyArgs>(args?: SelectSubset<T, ArticleViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleView.
     * @param {ArticleViewCreateArgs} args - Arguments to create a ArticleView.
     * @example
     * // Create one ArticleView
     * const ArticleView = await prisma.articleView.create({
     *   data: {
     *     // ... data to create a ArticleView
     *   }
     * })
     * 
     */
    create<T extends ArticleViewCreateArgs>(args: SelectSubset<T, ArticleViewCreateArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleViews.
     * @param {ArticleViewCreateManyArgs} args - Arguments to create many ArticleViews.
     * @example
     * // Create many ArticleViews
     * const articleView = await prisma.articleView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleViewCreateManyArgs>(args?: SelectSubset<T, ArticleViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleViews and returns the data saved in the database.
     * @param {ArticleViewCreateManyAndReturnArgs} args - Arguments to create many ArticleViews.
     * @example
     * // Create many ArticleViews
     * const articleView = await prisma.articleView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleViews and only return the `articleId`
     * const articleViewWithArticleIdOnly = await prisma.articleView.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleView.
     * @param {ArticleViewDeleteArgs} args - Arguments to delete one ArticleView.
     * @example
     * // Delete one ArticleView
     * const ArticleView = await prisma.articleView.delete({
     *   where: {
     *     // ... filter to delete one ArticleView
     *   }
     * })
     * 
     */
    delete<T extends ArticleViewDeleteArgs>(args: SelectSubset<T, ArticleViewDeleteArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleView.
     * @param {ArticleViewUpdateArgs} args - Arguments to update one ArticleView.
     * @example
     * // Update one ArticleView
     * const articleView = await prisma.articleView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleViewUpdateArgs>(args: SelectSubset<T, ArticleViewUpdateArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleViews.
     * @param {ArticleViewDeleteManyArgs} args - Arguments to filter ArticleViews to delete.
     * @example
     * // Delete a few ArticleViews
     * const { count } = await prisma.articleView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleViewDeleteManyArgs>(args?: SelectSubset<T, ArticleViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleViews
     * const articleView = await prisma.articleView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleViewUpdateManyArgs>(args: SelectSubset<T, ArticleViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleViews and returns the data updated in the database.
     * @param {ArticleViewUpdateManyAndReturnArgs} args - Arguments to update many ArticleViews.
     * @example
     * // Update many ArticleViews
     * const articleView = await prisma.articleView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleViews and only return the `articleId`
     * const articleViewWithArticleIdOnly = await prisma.articleView.updateManyAndReturn({
     *   select: { articleId: true },
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
    updateManyAndReturn<T extends ArticleViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleView.
     * @param {ArticleViewUpsertArgs} args - Arguments to update or create a ArticleView.
     * @example
     * // Update or create a ArticleView
     * const articleView = await prisma.articleView.upsert({
     *   create: {
     *     // ... data to create a ArticleView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleView we want to update
     *   }
     * })
     */
    upsert<T extends ArticleViewUpsertArgs>(args: SelectSubset<T, ArticleViewUpsertArgs<ExtArgs>>): Prisma__ArticleViewClient<$Result.GetResult<Prisma.$ArticleViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewCountArgs} args - Arguments to filter ArticleViews to count.
     * @example
     * // Count the number of ArticleViews
     * const count = await prisma.articleView.count({
     *   where: {
     *     // ... the filter for the ArticleViews we want to count
     *   }
     * })
    **/
    count<T extends ArticleViewCountArgs>(
      args?: Subset<T, ArticleViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleViewAggregateArgs>(args: Subset<T, ArticleViewAggregateArgs>): Prisma.PrismaPromise<GetArticleViewAggregateType<T>>

    /**
     * Group by ArticleView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleViewGroupByArgs} args - Group by arguments.
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
      T extends ArticleViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleViewGroupByArgs['orderBy'] }
        : { orderBy?: ArticleViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleView model
   */
  readonly fields: ArticleViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleView model
   */
  interface ArticleViewFieldRefs {
    readonly articleId: FieldRef<"ArticleView", 'Int'>
    readonly userId: FieldRef<"ArticleView", 'Int'>
    readonly viewedAt: FieldRef<"ArticleView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleView findUnique
   */
  export type ArticleViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * Filter, which ArticleView to fetch.
     */
    where: ArticleViewWhereUniqueInput
  }

  /**
   * ArticleView findUniqueOrThrow
   */
  export type ArticleViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * Filter, which ArticleView to fetch.
     */
    where: ArticleViewWhereUniqueInput
  }

  /**
   * ArticleView findFirst
   */
  export type ArticleViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * Filter, which ArticleView to fetch.
     */
    where?: ArticleViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleViews to fetch.
     */
    orderBy?: ArticleViewOrderByWithRelationInput | ArticleViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleViews.
     */
    cursor?: ArticleViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleViews.
     */
    distinct?: ArticleViewScalarFieldEnum | ArticleViewScalarFieldEnum[]
  }

  /**
   * ArticleView findFirstOrThrow
   */
  export type ArticleViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * Filter, which ArticleView to fetch.
     */
    where?: ArticleViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleViews to fetch.
     */
    orderBy?: ArticleViewOrderByWithRelationInput | ArticleViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleViews.
     */
    cursor?: ArticleViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleViews.
     */
    distinct?: ArticleViewScalarFieldEnum | ArticleViewScalarFieldEnum[]
  }

  /**
   * ArticleView findMany
   */
  export type ArticleViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * Filter, which ArticleViews to fetch.
     */
    where?: ArticleViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleViews to fetch.
     */
    orderBy?: ArticleViewOrderByWithRelationInput | ArticleViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleViews.
     */
    cursor?: ArticleViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleViews.
     */
    skip?: number
    distinct?: ArticleViewScalarFieldEnum | ArticleViewScalarFieldEnum[]
  }

  /**
   * ArticleView create
   */
  export type ArticleViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleView.
     */
    data: XOR<ArticleViewCreateInput, ArticleViewUncheckedCreateInput>
  }

  /**
   * ArticleView createMany
   */
  export type ArticleViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleViews.
     */
    data: ArticleViewCreateManyInput | ArticleViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleView createManyAndReturn
   */
  export type ArticleViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleViews.
     */
    data: ArticleViewCreateManyInput | ArticleViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleView update
   */
  export type ArticleViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleView.
     */
    data: XOR<ArticleViewUpdateInput, ArticleViewUncheckedUpdateInput>
    /**
     * Choose, which ArticleView to update.
     */
    where: ArticleViewWhereUniqueInput
  }

  /**
   * ArticleView updateMany
   */
  export type ArticleViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleViews.
     */
    data: XOR<ArticleViewUpdateManyMutationInput, ArticleViewUncheckedUpdateManyInput>
    /**
     * Filter which ArticleViews to update
     */
    where?: ArticleViewWhereInput
    /**
     * Limit how many ArticleViews to update.
     */
    limit?: number
  }

  /**
   * ArticleView updateManyAndReturn
   */
  export type ArticleViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * The data used to update ArticleViews.
     */
    data: XOR<ArticleViewUpdateManyMutationInput, ArticleViewUncheckedUpdateManyInput>
    /**
     * Filter which ArticleViews to update
     */
    where?: ArticleViewWhereInput
    /**
     * Limit how many ArticleViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleView upsert
   */
  export type ArticleViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleView to update in case it exists.
     */
    where: ArticleViewWhereUniqueInput
    /**
     * In case the ArticleView found by the `where` argument doesn't exist, create a new ArticleView with this data.
     */
    create: XOR<ArticleViewCreateInput, ArticleViewUncheckedCreateInput>
    /**
     * In case the ArticleView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleViewUpdateInput, ArticleViewUncheckedUpdateInput>
  }

  /**
   * ArticleView delete
   */
  export type ArticleViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
    /**
     * Filter which ArticleView to delete.
     */
    where: ArticleViewWhereUniqueInput
  }

  /**
   * ArticleView deleteMany
   */
  export type ArticleViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleViews to delete
     */
    where?: ArticleViewWhereInput
    /**
     * Limit how many ArticleViews to delete.
     */
    limit?: number
  }

  /**
   * ArticleView without action
   */
  export type ArticleViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleView
     */
    select?: ArticleViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleView
     */
    omit?: ArticleViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleViewInclude<ExtArgs> | null
  }


  /**
   * Model Era
   */

  export type AggregateEra = {
    _count: EraCountAggregateOutputType | null
    _avg: EraAvgAggregateOutputType | null
    _sum: EraSumAggregateOutputType | null
    _min: EraMinAggregateOutputType | null
    _max: EraMaxAggregateOutputType | null
  }

  export type EraAvgAggregateOutputType = {
    id: number | null
  }

  export type EraSumAggregateOutputType = {
    id: number | null
  }

  export type EraMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EraMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EraCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EraAvgAggregateInputType = {
    id?: true
  }

  export type EraSumAggregateInputType = {
    id?: true
  }

  export type EraMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EraMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EraCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Era to aggregate.
     */
    where?: EraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eras to fetch.
     */
    orderBy?: EraOrderByWithRelationInput | EraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eras
    **/
    _count?: true | EraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EraMaxAggregateInputType
  }

  export type GetEraAggregateType<T extends EraAggregateArgs> = {
        [P in keyof T & keyof AggregateEra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEra[P]>
      : GetScalarType<T[P], AggregateEra[P]>
  }




  export type EraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EraWhereInput
    orderBy?: EraOrderByWithAggregationInput | EraOrderByWithAggregationInput[]
    by: EraScalarFieldEnum[] | EraScalarFieldEnum
    having?: EraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EraCountAggregateInputType | true
    _avg?: EraAvgAggregateInputType
    _sum?: EraSumAggregateInputType
    _min?: EraMinAggregateInputType
    _max?: EraMaxAggregateInputType
  }

  export type EraGroupByOutputType = {
    id: number
    name: string
    _count: EraCountAggregateOutputType | null
    _avg: EraAvgAggregateOutputType | null
    _sum: EraSumAggregateOutputType | null
    _min: EraMinAggregateOutputType | null
    _max: EraMaxAggregateOutputType | null
  }

  type GetEraGroupByPayload<T extends EraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EraGroupByOutputType[P]>
            : GetScalarType<T[P], EraGroupByOutputType[P]>
        }
      >
    >


  export type EraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articles?: boolean | Era$articlesArgs<ExtArgs>
    _count?: boolean | EraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["era"]>

  export type EraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["era"]>

  export type EraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["era"]>

  export type EraSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["era"]>
  export type EraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Era$articlesArgs<ExtArgs>
    _count?: boolean | EraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Era"
    objects: {
      articles: Prisma.$ArticleEraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["era"]>
    composites: {}
  }

  type EraGetPayload<S extends boolean | null | undefined | EraDefaultArgs> = $Result.GetResult<Prisma.$EraPayload, S>

  type EraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EraCountAggregateInputType | true
    }

  export interface EraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Era'], meta: { name: 'Era' } }
    /**
     * Find zero or one Era that matches the filter.
     * @param {EraFindUniqueArgs} args - Arguments to find a Era
     * @example
     * // Get one Era
     * const era = await prisma.era.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EraFindUniqueArgs>(args: SelectSubset<T, EraFindUniqueArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Era that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EraFindUniqueOrThrowArgs} args - Arguments to find a Era
     * @example
     * // Get one Era
     * const era = await prisma.era.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EraFindUniqueOrThrowArgs>(args: SelectSubset<T, EraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Era that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraFindFirstArgs} args - Arguments to find a Era
     * @example
     * // Get one Era
     * const era = await prisma.era.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EraFindFirstArgs>(args?: SelectSubset<T, EraFindFirstArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Era that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraFindFirstOrThrowArgs} args - Arguments to find a Era
     * @example
     * // Get one Era
     * const era = await prisma.era.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EraFindFirstOrThrowArgs>(args?: SelectSubset<T, EraFindFirstOrThrowArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eras
     * const eras = await prisma.era.findMany()
     * 
     * // Get first 10 Eras
     * const eras = await prisma.era.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eraWithIdOnly = await prisma.era.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EraFindManyArgs>(args?: SelectSubset<T, EraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Era.
     * @param {EraCreateArgs} args - Arguments to create a Era.
     * @example
     * // Create one Era
     * const Era = await prisma.era.create({
     *   data: {
     *     // ... data to create a Era
     *   }
     * })
     * 
     */
    create<T extends EraCreateArgs>(args: SelectSubset<T, EraCreateArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eras.
     * @param {EraCreateManyArgs} args - Arguments to create many Eras.
     * @example
     * // Create many Eras
     * const era = await prisma.era.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EraCreateManyArgs>(args?: SelectSubset<T, EraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eras and returns the data saved in the database.
     * @param {EraCreateManyAndReturnArgs} args - Arguments to create many Eras.
     * @example
     * // Create many Eras
     * const era = await prisma.era.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eras and only return the `id`
     * const eraWithIdOnly = await prisma.era.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EraCreateManyAndReturnArgs>(args?: SelectSubset<T, EraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Era.
     * @param {EraDeleteArgs} args - Arguments to delete one Era.
     * @example
     * // Delete one Era
     * const Era = await prisma.era.delete({
     *   where: {
     *     // ... filter to delete one Era
     *   }
     * })
     * 
     */
    delete<T extends EraDeleteArgs>(args: SelectSubset<T, EraDeleteArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Era.
     * @param {EraUpdateArgs} args - Arguments to update one Era.
     * @example
     * // Update one Era
     * const era = await prisma.era.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EraUpdateArgs>(args: SelectSubset<T, EraUpdateArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eras.
     * @param {EraDeleteManyArgs} args - Arguments to filter Eras to delete.
     * @example
     * // Delete a few Eras
     * const { count } = await prisma.era.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EraDeleteManyArgs>(args?: SelectSubset<T, EraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eras
     * const era = await prisma.era.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EraUpdateManyArgs>(args: SelectSubset<T, EraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eras and returns the data updated in the database.
     * @param {EraUpdateManyAndReturnArgs} args - Arguments to update many Eras.
     * @example
     * // Update many Eras
     * const era = await prisma.era.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eras and only return the `id`
     * const eraWithIdOnly = await prisma.era.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends EraUpdateManyAndReturnArgs>(args: SelectSubset<T, EraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Era.
     * @param {EraUpsertArgs} args - Arguments to update or create a Era.
     * @example
     * // Update or create a Era
     * const era = await prisma.era.upsert({
     *   create: {
     *     // ... data to create a Era
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Era we want to update
     *   }
     * })
     */
    upsert<T extends EraUpsertArgs>(args: SelectSubset<T, EraUpsertArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraCountArgs} args - Arguments to filter Eras to count.
     * @example
     * // Count the number of Eras
     * const count = await prisma.era.count({
     *   where: {
     *     // ... the filter for the Eras we want to count
     *   }
     * })
    **/
    count<T extends EraCountArgs>(
      args?: Subset<T, EraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Era.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EraAggregateArgs>(args: Subset<T, EraAggregateArgs>): Prisma.PrismaPromise<GetEraAggregateType<T>>

    /**
     * Group by Era.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EraGroupByArgs} args - Group by arguments.
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
      T extends EraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EraGroupByArgs['orderBy'] }
        : { orderBy?: EraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Era model
   */
  readonly fields: EraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Era.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Era$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Era$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Era model
   */
  interface EraFieldRefs {
    readonly id: FieldRef<"Era", 'Int'>
    readonly name: FieldRef<"Era", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Era findUnique
   */
  export type EraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * Filter, which Era to fetch.
     */
    where: EraWhereUniqueInput
  }

  /**
   * Era findUniqueOrThrow
   */
  export type EraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * Filter, which Era to fetch.
     */
    where: EraWhereUniqueInput
  }

  /**
   * Era findFirst
   */
  export type EraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * Filter, which Era to fetch.
     */
    where?: EraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eras to fetch.
     */
    orderBy?: EraOrderByWithRelationInput | EraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eras.
     */
    cursor?: EraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eras.
     */
    distinct?: EraScalarFieldEnum | EraScalarFieldEnum[]
  }

  /**
   * Era findFirstOrThrow
   */
  export type EraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * Filter, which Era to fetch.
     */
    where?: EraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eras to fetch.
     */
    orderBy?: EraOrderByWithRelationInput | EraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eras.
     */
    cursor?: EraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eras.
     */
    distinct?: EraScalarFieldEnum | EraScalarFieldEnum[]
  }

  /**
   * Era findMany
   */
  export type EraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * Filter, which Eras to fetch.
     */
    where?: EraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eras to fetch.
     */
    orderBy?: EraOrderByWithRelationInput | EraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eras.
     */
    cursor?: EraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eras.
     */
    skip?: number
    distinct?: EraScalarFieldEnum | EraScalarFieldEnum[]
  }

  /**
   * Era create
   */
  export type EraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * The data needed to create a Era.
     */
    data: XOR<EraCreateInput, EraUncheckedCreateInput>
  }

  /**
   * Era createMany
   */
  export type EraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eras.
     */
    data: EraCreateManyInput | EraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Era createManyAndReturn
   */
  export type EraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * The data used to create many Eras.
     */
    data: EraCreateManyInput | EraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Era update
   */
  export type EraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * The data needed to update a Era.
     */
    data: XOR<EraUpdateInput, EraUncheckedUpdateInput>
    /**
     * Choose, which Era to update.
     */
    where: EraWhereUniqueInput
  }

  /**
   * Era updateMany
   */
  export type EraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eras.
     */
    data: XOR<EraUpdateManyMutationInput, EraUncheckedUpdateManyInput>
    /**
     * Filter which Eras to update
     */
    where?: EraWhereInput
    /**
     * Limit how many Eras to update.
     */
    limit?: number
  }

  /**
   * Era updateManyAndReturn
   */
  export type EraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * The data used to update Eras.
     */
    data: XOR<EraUpdateManyMutationInput, EraUncheckedUpdateManyInput>
    /**
     * Filter which Eras to update
     */
    where?: EraWhereInput
    /**
     * Limit how many Eras to update.
     */
    limit?: number
  }

  /**
   * Era upsert
   */
  export type EraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * The filter to search for the Era to update in case it exists.
     */
    where: EraWhereUniqueInput
    /**
     * In case the Era found by the `where` argument doesn't exist, create a new Era with this data.
     */
    create: XOR<EraCreateInput, EraUncheckedCreateInput>
    /**
     * In case the Era was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EraUpdateInput, EraUncheckedUpdateInput>
  }

  /**
   * Era delete
   */
  export type EraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
    /**
     * Filter which Era to delete.
     */
    where: EraWhereUniqueInput
  }

  /**
   * Era deleteMany
   */
  export type EraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eras to delete
     */
    where?: EraWhereInput
    /**
     * Limit how many Eras to delete.
     */
    limit?: number
  }

  /**
   * Era.articles
   */
  export type Era$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    where?: ArticleEraWhereInput
    orderBy?: ArticleEraOrderByWithRelationInput | ArticleEraOrderByWithRelationInput[]
    cursor?: ArticleEraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleEraScalarFieldEnum | ArticleEraScalarFieldEnum[]
  }

  /**
   * Era without action
   */
  export type EraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Era
     */
    select?: EraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Era
     */
    omit?: EraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EraInclude<ExtArgs> | null
  }


  /**
   * Model ArticleEra
   */

  export type AggregateArticleEra = {
    _count: ArticleEraCountAggregateOutputType | null
    _avg: ArticleEraAvgAggregateOutputType | null
    _sum: ArticleEraSumAggregateOutputType | null
    _min: ArticleEraMinAggregateOutputType | null
    _max: ArticleEraMaxAggregateOutputType | null
  }

  export type ArticleEraAvgAggregateOutputType = {
    articleId: number | null
    eraId: number | null
  }

  export type ArticleEraSumAggregateOutputType = {
    articleId: number | null
    eraId: number | null
  }

  export type ArticleEraMinAggregateOutputType = {
    articleId: number | null
    eraId: number | null
  }

  export type ArticleEraMaxAggregateOutputType = {
    articleId: number | null
    eraId: number | null
  }

  export type ArticleEraCountAggregateOutputType = {
    articleId: number
    eraId: number
    _all: number
  }


  export type ArticleEraAvgAggregateInputType = {
    articleId?: true
    eraId?: true
  }

  export type ArticleEraSumAggregateInputType = {
    articleId?: true
    eraId?: true
  }

  export type ArticleEraMinAggregateInputType = {
    articleId?: true
    eraId?: true
  }

  export type ArticleEraMaxAggregateInputType = {
    articleId?: true
    eraId?: true
  }

  export type ArticleEraCountAggregateInputType = {
    articleId?: true
    eraId?: true
    _all?: true
  }

  export type ArticleEraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleEra to aggregate.
     */
    where?: ArticleEraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEras to fetch.
     */
    orderBy?: ArticleEraOrderByWithRelationInput | ArticleEraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleEraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleEras
    **/
    _count?: true | ArticleEraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleEraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleEraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleEraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleEraMaxAggregateInputType
  }

  export type GetArticleEraAggregateType<T extends ArticleEraAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleEra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleEra[P]>
      : GetScalarType<T[P], AggregateArticleEra[P]>
  }




  export type ArticleEraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEraWhereInput
    orderBy?: ArticleEraOrderByWithAggregationInput | ArticleEraOrderByWithAggregationInput[]
    by: ArticleEraScalarFieldEnum[] | ArticleEraScalarFieldEnum
    having?: ArticleEraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleEraCountAggregateInputType | true
    _avg?: ArticleEraAvgAggregateInputType
    _sum?: ArticleEraSumAggregateInputType
    _min?: ArticleEraMinAggregateInputType
    _max?: ArticleEraMaxAggregateInputType
  }

  export type ArticleEraGroupByOutputType = {
    articleId: number
    eraId: number
    _count: ArticleEraCountAggregateOutputType | null
    _avg: ArticleEraAvgAggregateOutputType | null
    _sum: ArticleEraSumAggregateOutputType | null
    _min: ArticleEraMinAggregateOutputType | null
    _max: ArticleEraMaxAggregateOutputType | null
  }

  type GetArticleEraGroupByPayload<T extends ArticleEraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleEraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleEraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleEraGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleEraGroupByOutputType[P]>
        }
      >
    >


  export type ArticleEraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    eraId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    era?: boolean | EraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleEra"]>

  export type ArticleEraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    eraId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    era?: boolean | EraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleEra"]>

  export type ArticleEraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    eraId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    era?: boolean | EraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleEra"]>

  export type ArticleEraSelectScalar = {
    articleId?: boolean
    eraId?: boolean
  }

  export type ArticleEraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "eraId", ExtArgs["result"]["articleEra"]>
  export type ArticleEraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    era?: boolean | EraDefaultArgs<ExtArgs>
  }
  export type ArticleEraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    era?: boolean | EraDefaultArgs<ExtArgs>
  }
  export type ArticleEraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    era?: boolean | EraDefaultArgs<ExtArgs>
  }

  export type $ArticleEraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleEra"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      era: Prisma.$EraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      eraId: number
    }, ExtArgs["result"]["articleEra"]>
    composites: {}
  }

  type ArticleEraGetPayload<S extends boolean | null | undefined | ArticleEraDefaultArgs> = $Result.GetResult<Prisma.$ArticleEraPayload, S>

  type ArticleEraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleEraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleEraCountAggregateInputType | true
    }

  export interface ArticleEraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleEra'], meta: { name: 'ArticleEra' } }
    /**
     * Find zero or one ArticleEra that matches the filter.
     * @param {ArticleEraFindUniqueArgs} args - Arguments to find a ArticleEra
     * @example
     * // Get one ArticleEra
     * const articleEra = await prisma.articleEra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleEraFindUniqueArgs>(args: SelectSubset<T, ArticleEraFindUniqueArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleEra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleEraFindUniqueOrThrowArgs} args - Arguments to find a ArticleEra
     * @example
     * // Get one ArticleEra
     * const articleEra = await prisma.articleEra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleEraFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleEraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleEra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraFindFirstArgs} args - Arguments to find a ArticleEra
     * @example
     * // Get one ArticleEra
     * const articleEra = await prisma.articleEra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleEraFindFirstArgs>(args?: SelectSubset<T, ArticleEraFindFirstArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleEra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraFindFirstOrThrowArgs} args - Arguments to find a ArticleEra
     * @example
     * // Get one ArticleEra
     * const articleEra = await prisma.articleEra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleEraFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleEraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleEras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleEras
     * const articleEras = await prisma.articleEra.findMany()
     * 
     * // Get first 10 ArticleEras
     * const articleEras = await prisma.articleEra.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleEraWithArticleIdOnly = await prisma.articleEra.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleEraFindManyArgs>(args?: SelectSubset<T, ArticleEraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleEra.
     * @param {ArticleEraCreateArgs} args - Arguments to create a ArticleEra.
     * @example
     * // Create one ArticleEra
     * const ArticleEra = await prisma.articleEra.create({
     *   data: {
     *     // ... data to create a ArticleEra
     *   }
     * })
     * 
     */
    create<T extends ArticleEraCreateArgs>(args: SelectSubset<T, ArticleEraCreateArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleEras.
     * @param {ArticleEraCreateManyArgs} args - Arguments to create many ArticleEras.
     * @example
     * // Create many ArticleEras
     * const articleEra = await prisma.articleEra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleEraCreateManyArgs>(args?: SelectSubset<T, ArticleEraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleEras and returns the data saved in the database.
     * @param {ArticleEraCreateManyAndReturnArgs} args - Arguments to create many ArticleEras.
     * @example
     * // Create many ArticleEras
     * const articleEra = await prisma.articleEra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleEras and only return the `articleId`
     * const articleEraWithArticleIdOnly = await prisma.articleEra.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleEraCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleEraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleEra.
     * @param {ArticleEraDeleteArgs} args - Arguments to delete one ArticleEra.
     * @example
     * // Delete one ArticleEra
     * const ArticleEra = await prisma.articleEra.delete({
     *   where: {
     *     // ... filter to delete one ArticleEra
     *   }
     * })
     * 
     */
    delete<T extends ArticleEraDeleteArgs>(args: SelectSubset<T, ArticleEraDeleteArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleEra.
     * @param {ArticleEraUpdateArgs} args - Arguments to update one ArticleEra.
     * @example
     * // Update one ArticleEra
     * const articleEra = await prisma.articleEra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleEraUpdateArgs>(args: SelectSubset<T, ArticleEraUpdateArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleEras.
     * @param {ArticleEraDeleteManyArgs} args - Arguments to filter ArticleEras to delete.
     * @example
     * // Delete a few ArticleEras
     * const { count } = await prisma.articleEra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleEraDeleteManyArgs>(args?: SelectSubset<T, ArticleEraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleEras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleEras
     * const articleEra = await prisma.articleEra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleEraUpdateManyArgs>(args: SelectSubset<T, ArticleEraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleEras and returns the data updated in the database.
     * @param {ArticleEraUpdateManyAndReturnArgs} args - Arguments to update many ArticleEras.
     * @example
     * // Update many ArticleEras
     * const articleEra = await prisma.articleEra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleEras and only return the `articleId`
     * const articleEraWithArticleIdOnly = await prisma.articleEra.updateManyAndReturn({
     *   select: { articleId: true },
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
    updateManyAndReturn<T extends ArticleEraUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleEraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleEra.
     * @param {ArticleEraUpsertArgs} args - Arguments to update or create a ArticleEra.
     * @example
     * // Update or create a ArticleEra
     * const articleEra = await prisma.articleEra.upsert({
     *   create: {
     *     // ... data to create a ArticleEra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleEra we want to update
     *   }
     * })
     */
    upsert<T extends ArticleEraUpsertArgs>(args: SelectSubset<T, ArticleEraUpsertArgs<ExtArgs>>): Prisma__ArticleEraClient<$Result.GetResult<Prisma.$ArticleEraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleEras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraCountArgs} args - Arguments to filter ArticleEras to count.
     * @example
     * // Count the number of ArticleEras
     * const count = await prisma.articleEra.count({
     *   where: {
     *     // ... the filter for the ArticleEras we want to count
     *   }
     * })
    **/
    count<T extends ArticleEraCountArgs>(
      args?: Subset<T, ArticleEraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleEraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleEra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleEraAggregateArgs>(args: Subset<T, ArticleEraAggregateArgs>): Prisma.PrismaPromise<GetArticleEraAggregateType<T>>

    /**
     * Group by ArticleEra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEraGroupByArgs} args - Group by arguments.
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
      T extends ArticleEraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleEraGroupByArgs['orderBy'] }
        : { orderBy?: ArticleEraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleEraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleEraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleEra model
   */
  readonly fields: ArticleEraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleEra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleEraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    era<T extends EraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EraDefaultArgs<ExtArgs>>): Prisma__EraClient<$Result.GetResult<Prisma.$EraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleEra model
   */
  interface ArticleEraFieldRefs {
    readonly articleId: FieldRef<"ArticleEra", 'Int'>
    readonly eraId: FieldRef<"ArticleEra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArticleEra findUnique
   */
  export type ArticleEraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEra to fetch.
     */
    where: ArticleEraWhereUniqueInput
  }

  /**
   * ArticleEra findUniqueOrThrow
   */
  export type ArticleEraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEra to fetch.
     */
    where: ArticleEraWhereUniqueInput
  }

  /**
   * ArticleEra findFirst
   */
  export type ArticleEraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEra to fetch.
     */
    where?: ArticleEraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEras to fetch.
     */
    orderBy?: ArticleEraOrderByWithRelationInput | ArticleEraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleEras.
     */
    cursor?: ArticleEraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleEras.
     */
    distinct?: ArticleEraScalarFieldEnum | ArticleEraScalarFieldEnum[]
  }

  /**
   * ArticleEra findFirstOrThrow
   */
  export type ArticleEraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEra to fetch.
     */
    where?: ArticleEraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEras to fetch.
     */
    orderBy?: ArticleEraOrderByWithRelationInput | ArticleEraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleEras.
     */
    cursor?: ArticleEraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleEras.
     */
    distinct?: ArticleEraScalarFieldEnum | ArticleEraScalarFieldEnum[]
  }

  /**
   * ArticleEra findMany
   */
  export type ArticleEraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEras to fetch.
     */
    where?: ArticleEraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEras to fetch.
     */
    orderBy?: ArticleEraOrderByWithRelationInput | ArticleEraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleEras.
     */
    cursor?: ArticleEraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEras.
     */
    skip?: number
    distinct?: ArticleEraScalarFieldEnum | ArticleEraScalarFieldEnum[]
  }

  /**
   * ArticleEra create
   */
  export type ArticleEraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleEra.
     */
    data: XOR<ArticleEraCreateInput, ArticleEraUncheckedCreateInput>
  }

  /**
   * ArticleEra createMany
   */
  export type ArticleEraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleEras.
     */
    data: ArticleEraCreateManyInput | ArticleEraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleEra createManyAndReturn
   */
  export type ArticleEraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleEras.
     */
    data: ArticleEraCreateManyInput | ArticleEraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleEra update
   */
  export type ArticleEraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleEra.
     */
    data: XOR<ArticleEraUpdateInput, ArticleEraUncheckedUpdateInput>
    /**
     * Choose, which ArticleEra to update.
     */
    where: ArticleEraWhereUniqueInput
  }

  /**
   * ArticleEra updateMany
   */
  export type ArticleEraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleEras.
     */
    data: XOR<ArticleEraUpdateManyMutationInput, ArticleEraUncheckedUpdateManyInput>
    /**
     * Filter which ArticleEras to update
     */
    where?: ArticleEraWhereInput
    /**
     * Limit how many ArticleEras to update.
     */
    limit?: number
  }

  /**
   * ArticleEra updateManyAndReturn
   */
  export type ArticleEraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * The data used to update ArticleEras.
     */
    data: XOR<ArticleEraUpdateManyMutationInput, ArticleEraUncheckedUpdateManyInput>
    /**
     * Filter which ArticleEras to update
     */
    where?: ArticleEraWhereInput
    /**
     * Limit how many ArticleEras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleEra upsert
   */
  export type ArticleEraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleEra to update in case it exists.
     */
    where: ArticleEraWhereUniqueInput
    /**
     * In case the ArticleEra found by the `where` argument doesn't exist, create a new ArticleEra with this data.
     */
    create: XOR<ArticleEraCreateInput, ArticleEraUncheckedCreateInput>
    /**
     * In case the ArticleEra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleEraUpdateInput, ArticleEraUncheckedUpdateInput>
  }

  /**
   * ArticleEra delete
   */
  export type ArticleEraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
    /**
     * Filter which ArticleEra to delete.
     */
    where: ArticleEraWhereUniqueInput
  }

  /**
   * ArticleEra deleteMany
   */
  export type ArticleEraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleEras to delete
     */
    where?: ArticleEraWhereInput
    /**
     * Limit how many ArticleEras to delete.
     */
    limit?: number
  }

  /**
   * ArticleEra without action
   */
  export type ArticleEraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEra
     */
    select?: ArticleEraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEra
     */
    omit?: ArticleEraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEraInclude<ExtArgs> | null
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


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    author: 'author',
    date: 'date',
    contentDate: 'contentDate',
    tags: 'tags'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ArticleCategoryScalarFieldEnum: {
    articleId: 'articleId',
    categoryId: 'categoryId'
  };

  export type ArticleCategoryScalarFieldEnum = (typeof ArticleCategoryScalarFieldEnum)[keyof typeof ArticleCategoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    displayName: 'displayName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserArticleScalarFieldEnum: {
    articleId: 'articleId',
    userId: 'userId'
  };

  export type UserArticleScalarFieldEnum = (typeof UserArticleScalarFieldEnum)[keyof typeof UserArticleScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    userId: 'userId',
    body: 'body'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ArticleViewScalarFieldEnum: {
    articleId: 'articleId',
    userId: 'userId',
    viewedAt: 'viewedAt'
  };

  export type ArticleViewScalarFieldEnum = (typeof ArticleViewScalarFieldEnum)[keyof typeof ArticleViewScalarFieldEnum]


  export const EraScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EraScalarFieldEnum = (typeof EraScalarFieldEnum)[keyof typeof EraScalarFieldEnum]


  export const ArticleEraScalarFieldEnum: {
    articleId: 'articleId',
    eraId: 'eraId'
  };

  export type ArticleEraScalarFieldEnum = (typeof ArticleEraScalarFieldEnum)[keyof typeof ArticleEraScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: IntFilter<"Article"> | number
    title?: StringFilter<"Article"> | string
    body?: StringFilter<"Article"> | string
    author?: StringFilter<"Article"> | string
    date?: DateTimeFilter<"Article"> | Date | string
    contentDate?: DateTimeFilter<"Article"> | Date | string
    tags?: StringFilter<"Article"> | string
    categories?: ArticleCategoryListRelationFilter
    users?: UserArticleListRelationFilter
    comments?: CommentsListRelationFilter
    views?: ArticleViewListRelationFilter
    eras?: ArticleEraListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    author?: SortOrder
    date?: SortOrder
    contentDate?: SortOrder
    tags?: SortOrder
    categories?: ArticleCategoryOrderByRelationAggregateInput
    users?: UserArticleOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    views?: ArticleViewOrderByRelationAggregateInput
    eras?: ArticleEraOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    body?: StringFilter<"Article"> | string
    author?: StringFilter<"Article"> | string
    date?: DateTimeFilter<"Article"> | Date | string
    contentDate?: DateTimeFilter<"Article"> | Date | string
    tags?: StringFilter<"Article"> | string
    categories?: ArticleCategoryListRelationFilter
    users?: UserArticleListRelationFilter
    comments?: CommentsListRelationFilter
    views?: ArticleViewListRelationFilter
    eras?: ArticleEraListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    author?: SortOrder
    date?: SortOrder
    contentDate?: SortOrder
    tags?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Article"> | number
    title?: StringWithAggregatesFilter<"Article"> | string
    body?: StringWithAggregatesFilter<"Article"> | string
    author?: StringWithAggregatesFilter<"Article"> | string
    date?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    contentDate?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    tags?: StringWithAggregatesFilter<"Article"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    articles?: ArticleCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: ArticleCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    articles?: ArticleCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ArticleCategoryWhereInput = {
    AND?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    OR?: ArticleCategoryWhereInput[]
    NOT?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    articleId?: IntFilter<"ArticleCategory"> | number
    categoryId?: IntFilter<"ArticleCategory"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ArticleCategoryOrderByWithRelationInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
    article?: ArticleOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ArticleCategoryWhereUniqueInput = Prisma.AtLeast<{
    articleId_categoryId?: ArticleCategoryArticleIdCategoryIdCompoundUniqueInput
    AND?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    OR?: ArticleCategoryWhereInput[]
    NOT?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    articleId?: IntFilter<"ArticleCategory"> | number
    categoryId?: IntFilter<"ArticleCategory"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "articleId_categoryId">

  export type ArticleCategoryOrderByWithAggregationInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
    _count?: ArticleCategoryCountOrderByAggregateInput
    _avg?: ArticleCategoryAvgOrderByAggregateInput
    _max?: ArticleCategoryMaxOrderByAggregateInput
    _min?: ArticleCategoryMinOrderByAggregateInput
    _sum?: ArticleCategorySumOrderByAggregateInput
  }

  export type ArticleCategoryScalarWhereWithAggregatesInput = {
    AND?: ArticleCategoryScalarWhereWithAggregatesInput | ArticleCategoryScalarWhereWithAggregatesInput[]
    OR?: ArticleCategoryScalarWhereWithAggregatesInput[]
    NOT?: ArticleCategoryScalarWhereWithAggregatesInput | ArticleCategoryScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"ArticleCategory"> | number
    categoryId?: IntWithAggregatesFilter<"ArticleCategory"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    articles?: UserArticleListRelationFilter
    comments?: CommentsListRelationFilter
    views?: ArticleViewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    articles?: UserArticleOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    views?: ArticleViewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    articles?: UserArticleListRelationFilter
    comments?: CommentsListRelationFilter
    views?: ArticleViewListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserArticleWhereInput = {
    AND?: UserArticleWhereInput | UserArticleWhereInput[]
    OR?: UserArticleWhereInput[]
    NOT?: UserArticleWhereInput | UserArticleWhereInput[]
    articleId?: IntFilter<"UserArticle"> | number
    userId?: IntFilter<"UserArticle"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserArticleOrderByWithRelationInput = {
    articleId?: SortOrder
    userId?: SortOrder
    article?: ArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserArticleWhereUniqueInput = Prisma.AtLeast<{
    articleId_userId?: UserArticleArticleIdUserIdCompoundUniqueInput
    AND?: UserArticleWhereInput | UserArticleWhereInput[]
    OR?: UserArticleWhereInput[]
    NOT?: UserArticleWhereInput | UserArticleWhereInput[]
    articleId?: IntFilter<"UserArticle"> | number
    userId?: IntFilter<"UserArticle"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "articleId_userId">

  export type UserArticleOrderByWithAggregationInput = {
    articleId?: SortOrder
    userId?: SortOrder
    _count?: UserArticleCountOrderByAggregateInput
    _avg?: UserArticleAvgOrderByAggregateInput
    _max?: UserArticleMaxOrderByAggregateInput
    _min?: UserArticleMinOrderByAggregateInput
    _sum?: UserArticleSumOrderByAggregateInput
  }

  export type UserArticleScalarWhereWithAggregatesInput = {
    AND?: UserArticleScalarWhereWithAggregatesInput | UserArticleScalarWhereWithAggregatesInput[]
    OR?: UserArticleScalarWhereWithAggregatesInput[]
    NOT?: UserArticleScalarWhereWithAggregatesInput | UserArticleScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"UserArticle"> | number
    userId?: IntWithAggregatesFilter<"UserArticle"> | number
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    articleId?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    body?: StringFilter<"Comments"> | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    article?: ArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    articleId?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    body?: StringFilter<"Comments"> | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    articleId?: IntWithAggregatesFilter<"Comments"> | number
    userId?: IntWithAggregatesFilter<"Comments"> | number
    body?: StringWithAggregatesFilter<"Comments"> | string
  }

  export type ArticleViewWhereInput = {
    AND?: ArticleViewWhereInput | ArticleViewWhereInput[]
    OR?: ArticleViewWhereInput[]
    NOT?: ArticleViewWhereInput | ArticleViewWhereInput[]
    articleId?: IntFilter<"ArticleView"> | number
    userId?: IntFilter<"ArticleView"> | number
    viewedAt?: DateTimeFilter<"ArticleView"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArticleViewOrderByWithRelationInput = {
    articleId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ArticleViewWhereUniqueInput = Prisma.AtLeast<{
    articleId_userId_viewedAt?: ArticleViewArticleIdUserIdViewedAtCompoundUniqueInput
    AND?: ArticleViewWhereInput | ArticleViewWhereInput[]
    OR?: ArticleViewWhereInput[]
    NOT?: ArticleViewWhereInput | ArticleViewWhereInput[]
    articleId?: IntFilter<"ArticleView"> | number
    userId?: IntFilter<"ArticleView"> | number
    viewedAt?: DateTimeFilter<"ArticleView"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "articleId_userId_viewedAt">

  export type ArticleViewOrderByWithAggregationInput = {
    articleId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    _count?: ArticleViewCountOrderByAggregateInput
    _avg?: ArticleViewAvgOrderByAggregateInput
    _max?: ArticleViewMaxOrderByAggregateInput
    _min?: ArticleViewMinOrderByAggregateInput
    _sum?: ArticleViewSumOrderByAggregateInput
  }

  export type ArticleViewScalarWhereWithAggregatesInput = {
    AND?: ArticleViewScalarWhereWithAggregatesInput | ArticleViewScalarWhereWithAggregatesInput[]
    OR?: ArticleViewScalarWhereWithAggregatesInput[]
    NOT?: ArticleViewScalarWhereWithAggregatesInput | ArticleViewScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"ArticleView"> | number
    userId?: IntWithAggregatesFilter<"ArticleView"> | number
    viewedAt?: DateTimeWithAggregatesFilter<"ArticleView"> | Date | string
  }

  export type EraWhereInput = {
    AND?: EraWhereInput | EraWhereInput[]
    OR?: EraWhereInput[]
    NOT?: EraWhereInput | EraWhereInput[]
    id?: IntFilter<"Era"> | number
    name?: StringFilter<"Era"> | string
    articles?: ArticleEraListRelationFilter
  }

  export type EraOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: ArticleEraOrderByRelationAggregateInput
  }

  export type EraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EraWhereInput | EraWhereInput[]
    OR?: EraWhereInput[]
    NOT?: EraWhereInput | EraWhereInput[]
    name?: StringFilter<"Era"> | string
    articles?: ArticleEraListRelationFilter
  }, "id">

  export type EraOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: EraCountOrderByAggregateInput
    _avg?: EraAvgOrderByAggregateInput
    _max?: EraMaxOrderByAggregateInput
    _min?: EraMinOrderByAggregateInput
    _sum?: EraSumOrderByAggregateInput
  }

  export type EraScalarWhereWithAggregatesInput = {
    AND?: EraScalarWhereWithAggregatesInput | EraScalarWhereWithAggregatesInput[]
    OR?: EraScalarWhereWithAggregatesInput[]
    NOT?: EraScalarWhereWithAggregatesInput | EraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Era"> | number
    name?: StringWithAggregatesFilter<"Era"> | string
  }

  export type ArticleEraWhereInput = {
    AND?: ArticleEraWhereInput | ArticleEraWhereInput[]
    OR?: ArticleEraWhereInput[]
    NOT?: ArticleEraWhereInput | ArticleEraWhereInput[]
    articleId?: IntFilter<"ArticleEra"> | number
    eraId?: IntFilter<"ArticleEra"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    era?: XOR<EraScalarRelationFilter, EraWhereInput>
  }

  export type ArticleEraOrderByWithRelationInput = {
    articleId?: SortOrder
    eraId?: SortOrder
    article?: ArticleOrderByWithRelationInput
    era?: EraOrderByWithRelationInput
  }

  export type ArticleEraWhereUniqueInput = Prisma.AtLeast<{
    articleId_eraId?: ArticleEraArticleIdEraIdCompoundUniqueInput
    AND?: ArticleEraWhereInput | ArticleEraWhereInput[]
    OR?: ArticleEraWhereInput[]
    NOT?: ArticleEraWhereInput | ArticleEraWhereInput[]
    articleId?: IntFilter<"ArticleEra"> | number
    eraId?: IntFilter<"ArticleEra"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    era?: XOR<EraScalarRelationFilter, EraWhereInput>
  }, "articleId_eraId">

  export type ArticleEraOrderByWithAggregationInput = {
    articleId?: SortOrder
    eraId?: SortOrder
    _count?: ArticleEraCountOrderByAggregateInput
    _avg?: ArticleEraAvgOrderByAggregateInput
    _max?: ArticleEraMaxOrderByAggregateInput
    _min?: ArticleEraMinOrderByAggregateInput
    _sum?: ArticleEraSumOrderByAggregateInput
  }

  export type ArticleEraScalarWhereWithAggregatesInput = {
    AND?: ArticleEraScalarWhereWithAggregatesInput | ArticleEraScalarWhereWithAggregatesInput[]
    OR?: ArticleEraScalarWhereWithAggregatesInput[]
    NOT?: ArticleEraScalarWhereWithAggregatesInput | ArticleEraScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"ArticleEra"> | number
    eraId?: IntWithAggregatesFilter<"ArticleEra"> | number
  }

  export type ArticleCreateInput = {
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryCreateNestedManyWithoutArticleInput
    users?: UserArticleCreateNestedManyWithoutArticleInput
    comments?: CommentsCreateNestedManyWithoutArticleInput
    views?: ArticleViewCreateNestedManyWithoutArticleInput
    eras?: ArticleEraCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput
    users?: UserArticleUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentsUncheckedCreateNestedManyWithoutArticleInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutArticleInput
    eras?: ArticleEraUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUpdateManyWithoutArticleNestedInput
    users?: UserArticleUpdateManyWithoutArticleNestedInput
    comments?: CommentsUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput
    users?: UserArticleUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
  }

  export type ArticleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    articles?: ArticleCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    articles?: ArticleCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleCategoryCreateInput = {
    article: ArticleCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutArticlesInput
  }

  export type ArticleCategoryUncheckedCreateInput = {
    articleId: number
    categoryId: number
  }

  export type ArticleCategoryUpdateInput = {
    article?: ArticleUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleCategoryUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCategoryCreateManyInput = {
    articleId: number
    categoryId: number
  }

  export type ArticleCategoryUpdateManyMutationInput = {

  }

  export type ArticleCategoryUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username: string
    displayName: string
    articles?: UserArticleCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    views?: ArticleViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    displayName: string
    articles?: UserArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    articles?: UserArticleUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    views?: ArticleViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    articles?: UserArticleUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    displayName: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
  }

  export type UserArticleCreateInput = {
    article: ArticleCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutArticlesInput
  }

  export type UserArticleUncheckedCreateInput = {
    articleId: number
    userId: number
  }

  export type UserArticleUpdateInput = {
    article?: ArticleUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type UserArticleUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleCreateManyInput = {
    articleId: number
    userId: number
  }

  export type UserArticleUpdateManyMutationInput = {

  }

  export type UserArticleUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateInput = {
    body: string
    article: ArticleCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    articleId: number
    userId: number
    body: string
  }

  export type CommentsUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    article?: ArticleUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyInput = {
    id?: number
    articleId: number
    userId: number
    body: string
  }

  export type CommentsUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleViewCreateInput = {
    viewedAt: Date | string
    article: ArticleCreateNestedOneWithoutViewsInput
    user: UserCreateNestedOneWithoutViewsInput
  }

  export type ArticleViewUncheckedCreateInput = {
    articleId: number
    userId: number
    viewedAt: Date | string
  }

  export type ArticleViewUpdateInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutViewsNestedInput
    user?: UserUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ArticleViewUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleViewCreateManyInput = {
    articleId: number
    userId: number
    viewedAt: Date | string
  }

  export type ArticleViewUpdateManyMutationInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleViewUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EraCreateInput = {
    name: string
    articles?: ArticleEraCreateNestedManyWithoutEraInput
  }

  export type EraUncheckedCreateInput = {
    id?: number
    name: string
    articles?: ArticleEraUncheckedCreateNestedManyWithoutEraInput
  }

  export type EraUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleEraUpdateManyWithoutEraNestedInput
  }

  export type EraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleEraUncheckedUpdateManyWithoutEraNestedInput
  }

  export type EraCreateManyInput = {
    id?: number
    name: string
  }

  export type EraUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleEraCreateInput = {
    article: ArticleCreateNestedOneWithoutErasInput
    era: EraCreateNestedOneWithoutArticlesInput
  }

  export type ArticleEraUncheckedCreateInput = {
    articleId: number
    eraId: number
  }

  export type ArticleEraUpdateInput = {
    article?: ArticleUpdateOneRequiredWithoutErasNestedInput
    era?: EraUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleEraUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    eraId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleEraCreateManyInput = {
    articleId: number
    eraId: number
  }

  export type ArticleEraUpdateManyMutationInput = {

  }

  export type ArticleEraUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    eraId?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticleCategoryListRelationFilter = {
    every?: ArticleCategoryWhereInput
    some?: ArticleCategoryWhereInput
    none?: ArticleCategoryWhereInput
  }

  export type UserArticleListRelationFilter = {
    every?: UserArticleWhereInput
    some?: UserArticleWhereInput
    none?: UserArticleWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type ArticleViewListRelationFilter = {
    every?: ArticleViewWhereInput
    some?: ArticleViewWhereInput
    none?: ArticleViewWhereInput
  }

  export type ArticleEraListRelationFilter = {
    every?: ArticleEraWhereInput
    some?: ArticleEraWhereInput
    none?: ArticleEraWhereInput
  }

  export type ArticleCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleEraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    author?: SortOrder
    date?: SortOrder
    contentDate?: SortOrder
    tags?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    author?: SortOrder
    date?: SortOrder
    contentDate?: SortOrder
    tags?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    author?: SortOrder
    date?: SortOrder
    contentDate?: SortOrder
    tags?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ArticleCategoryArticleIdCategoryIdCompoundUniqueInput = {
    articleId: number
    categoryId: number
  }

  export type ArticleCategoryCountOrderByAggregateInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArticleCategoryAvgOrderByAggregateInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArticleCategoryMaxOrderByAggregateInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArticleCategoryMinOrderByAggregateInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArticleCategorySumOrderByAggregateInput = {
    articleId?: SortOrder
    categoryId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserArticleArticleIdUserIdCompoundUniqueInput = {
    articleId: number
    userId: number
  }

  export type UserArticleCountOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type UserArticleAvgOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type UserArticleMaxOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type UserArticleMinOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type UserArticleSumOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type ArticleViewArticleIdUserIdViewedAtCompoundUniqueInput = {
    articleId: number
    userId: number
    viewedAt: Date | string
  }

  export type ArticleViewCountOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ArticleViewAvgOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type ArticleViewMaxOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ArticleViewMinOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ArticleViewSumOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type EraCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EraMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EraMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EraScalarRelationFilter = {
    is?: EraWhereInput
    isNot?: EraWhereInput
  }

  export type ArticleEraArticleIdEraIdCompoundUniqueInput = {
    articleId: number
    eraId: number
  }

  export type ArticleEraCountOrderByAggregateInput = {
    articleId?: SortOrder
    eraId?: SortOrder
  }

  export type ArticleEraAvgOrderByAggregateInput = {
    articleId?: SortOrder
    eraId?: SortOrder
  }

  export type ArticleEraMaxOrderByAggregateInput = {
    articleId?: SortOrder
    eraId?: SortOrder
  }

  export type ArticleEraMinOrderByAggregateInput = {
    articleId?: SortOrder
    eraId?: SortOrder
  }

  export type ArticleEraSumOrderByAggregateInput = {
    articleId?: SortOrder
    eraId?: SortOrder
  }

  export type ArticleCategoryCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleCategoryCreateWithoutArticleInput, ArticleCategoryUncheckedCreateWithoutArticleInput> | ArticleCategoryCreateWithoutArticleInput[] | ArticleCategoryUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutArticleInput | ArticleCategoryCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleCategoryCreateManyArticleInputEnvelope
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
  }

  export type UserArticleCreateNestedManyWithoutArticleInput = {
    create?: XOR<UserArticleCreateWithoutArticleInput, UserArticleUncheckedCreateWithoutArticleInput> | UserArticleCreateWithoutArticleInput[] | UserArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticleInput | UserArticleCreateOrConnectWithoutArticleInput[]
    createMany?: UserArticleCreateManyArticleInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentsCreateWithoutArticleInput, CommentsUncheckedCreateWithoutArticleInput> | CommentsCreateWithoutArticleInput[] | CommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticleInput | CommentsCreateOrConnectWithoutArticleInput[]
    createMany?: CommentsCreateManyArticleInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ArticleViewCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleViewCreateWithoutArticleInput, ArticleViewUncheckedCreateWithoutArticleInput> | ArticleViewCreateWithoutArticleInput[] | ArticleViewUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutArticleInput | ArticleViewCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleViewCreateManyArticleInputEnvelope
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
  }

  export type ArticleEraCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleEraCreateWithoutArticleInput, ArticleEraUncheckedCreateWithoutArticleInput> | ArticleEraCreateWithoutArticleInput[] | ArticleEraUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutArticleInput | ArticleEraCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleEraCreateManyArticleInputEnvelope
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
  }

  export type ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleCategoryCreateWithoutArticleInput, ArticleCategoryUncheckedCreateWithoutArticleInput> | ArticleCategoryCreateWithoutArticleInput[] | ArticleCategoryUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutArticleInput | ArticleCategoryCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleCategoryCreateManyArticleInputEnvelope
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
  }

  export type UserArticleUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<UserArticleCreateWithoutArticleInput, UserArticleUncheckedCreateWithoutArticleInput> | UserArticleCreateWithoutArticleInput[] | UserArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticleInput | UserArticleCreateOrConnectWithoutArticleInput[]
    createMany?: UserArticleCreateManyArticleInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentsCreateWithoutArticleInput, CommentsUncheckedCreateWithoutArticleInput> | CommentsCreateWithoutArticleInput[] | CommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticleInput | CommentsCreateOrConnectWithoutArticleInput[]
    createMany?: CommentsCreateManyArticleInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ArticleViewUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleViewCreateWithoutArticleInput, ArticleViewUncheckedCreateWithoutArticleInput> | ArticleViewCreateWithoutArticleInput[] | ArticleViewUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutArticleInput | ArticleViewCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleViewCreateManyArticleInputEnvelope
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
  }

  export type ArticleEraUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleEraCreateWithoutArticleInput, ArticleEraUncheckedCreateWithoutArticleInput> | ArticleEraCreateWithoutArticleInput[] | ArticleEraUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutArticleInput | ArticleEraCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleEraCreateManyArticleInputEnvelope
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticleCategoryUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleCategoryCreateWithoutArticleInput, ArticleCategoryUncheckedCreateWithoutArticleInput> | ArticleCategoryCreateWithoutArticleInput[] | ArticleCategoryUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutArticleInput | ArticleCategoryCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput | ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleCategoryCreateManyArticleInputEnvelope
    set?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    disconnect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    delete?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    update?: ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput | ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleCategoryUpdateManyWithWhereWithoutArticleInput | ArticleCategoryUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleCategoryScalarWhereInput | ArticleCategoryScalarWhereInput[]
  }

  export type UserArticleUpdateManyWithoutArticleNestedInput = {
    create?: XOR<UserArticleCreateWithoutArticleInput, UserArticleUncheckedCreateWithoutArticleInput> | UserArticleCreateWithoutArticleInput[] | UserArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticleInput | UserArticleCreateOrConnectWithoutArticleInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutArticleInput | UserArticleUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: UserArticleCreateManyArticleInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutArticleInput | UserArticleUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutArticleInput | UserArticleUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentsCreateWithoutArticleInput, CommentsUncheckedCreateWithoutArticleInput> | CommentsCreateWithoutArticleInput[] | CommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticleInput | CommentsCreateOrConnectWithoutArticleInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutArticleInput | CommentsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentsCreateManyArticleInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutArticleInput | CommentsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutArticleInput | CommentsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ArticleViewUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleViewCreateWithoutArticleInput, ArticleViewUncheckedCreateWithoutArticleInput> | ArticleViewCreateWithoutArticleInput[] | ArticleViewUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutArticleInput | ArticleViewCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleViewUpsertWithWhereUniqueWithoutArticleInput | ArticleViewUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleViewCreateManyArticleInputEnvelope
    set?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    disconnect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    delete?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    update?: ArticleViewUpdateWithWhereUniqueWithoutArticleInput | ArticleViewUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleViewUpdateManyWithWhereWithoutArticleInput | ArticleViewUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleViewScalarWhereInput | ArticleViewScalarWhereInput[]
  }

  export type ArticleEraUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleEraCreateWithoutArticleInput, ArticleEraUncheckedCreateWithoutArticleInput> | ArticleEraCreateWithoutArticleInput[] | ArticleEraUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutArticleInput | ArticleEraCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleEraUpsertWithWhereUniqueWithoutArticleInput | ArticleEraUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleEraCreateManyArticleInputEnvelope
    set?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    disconnect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    delete?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    update?: ArticleEraUpdateWithWhereUniqueWithoutArticleInput | ArticleEraUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleEraUpdateManyWithWhereWithoutArticleInput | ArticleEraUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleEraScalarWhereInput | ArticleEraScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleCategoryCreateWithoutArticleInput, ArticleCategoryUncheckedCreateWithoutArticleInput> | ArticleCategoryCreateWithoutArticleInput[] | ArticleCategoryUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutArticleInput | ArticleCategoryCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput | ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleCategoryCreateManyArticleInputEnvelope
    set?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    disconnect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    delete?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    update?: ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput | ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleCategoryUpdateManyWithWhereWithoutArticleInput | ArticleCategoryUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleCategoryScalarWhereInput | ArticleCategoryScalarWhereInput[]
  }

  export type UserArticleUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<UserArticleCreateWithoutArticleInput, UserArticleUncheckedCreateWithoutArticleInput> | UserArticleCreateWithoutArticleInput[] | UserArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticleInput | UserArticleCreateOrConnectWithoutArticleInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutArticleInput | UserArticleUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: UserArticleCreateManyArticleInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutArticleInput | UserArticleUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutArticleInput | UserArticleUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentsCreateWithoutArticleInput, CommentsUncheckedCreateWithoutArticleInput> | CommentsCreateWithoutArticleInput[] | CommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticleInput | CommentsCreateOrConnectWithoutArticleInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutArticleInput | CommentsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentsCreateManyArticleInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutArticleInput | CommentsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutArticleInput | CommentsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ArticleViewUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleViewCreateWithoutArticleInput, ArticleViewUncheckedCreateWithoutArticleInput> | ArticleViewCreateWithoutArticleInput[] | ArticleViewUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutArticleInput | ArticleViewCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleViewUpsertWithWhereUniqueWithoutArticleInput | ArticleViewUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleViewCreateManyArticleInputEnvelope
    set?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    disconnect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    delete?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    update?: ArticleViewUpdateWithWhereUniqueWithoutArticleInput | ArticleViewUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleViewUpdateManyWithWhereWithoutArticleInput | ArticleViewUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleViewScalarWhereInput | ArticleViewScalarWhereInput[]
  }

  export type ArticleEraUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleEraCreateWithoutArticleInput, ArticleEraUncheckedCreateWithoutArticleInput> | ArticleEraCreateWithoutArticleInput[] | ArticleEraUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutArticleInput | ArticleEraCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleEraUpsertWithWhereUniqueWithoutArticleInput | ArticleEraUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleEraCreateManyArticleInputEnvelope
    set?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    disconnect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    delete?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    update?: ArticleEraUpdateWithWhereUniqueWithoutArticleInput | ArticleEraUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleEraUpdateManyWithWhereWithoutArticleInput | ArticleEraUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleEraScalarWhereInput | ArticleEraScalarWhereInput[]
  }

  export type ArticleCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArticleCategoryCreateWithoutCategoryInput, ArticleCategoryUncheckedCreateWithoutCategoryInput> | ArticleCategoryCreateWithoutCategoryInput[] | ArticleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutCategoryInput | ArticleCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ArticleCategoryCreateManyCategoryInputEnvelope
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
  }

  export type ArticleCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArticleCategoryCreateWithoutCategoryInput, ArticleCategoryUncheckedCreateWithoutCategoryInput> | ArticleCategoryCreateWithoutCategoryInput[] | ArticleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutCategoryInput | ArticleCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ArticleCategoryCreateManyCategoryInputEnvelope
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
  }

  export type ArticleCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArticleCategoryCreateWithoutCategoryInput, ArticleCategoryUncheckedCreateWithoutCategoryInput> | ArticleCategoryCreateWithoutCategoryInput[] | ArticleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutCategoryInput | ArticleCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput | ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArticleCategoryCreateManyCategoryInputEnvelope
    set?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    disconnect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    delete?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    update?: ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput | ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArticleCategoryUpdateManyWithWhereWithoutCategoryInput | ArticleCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArticleCategoryScalarWhereInput | ArticleCategoryScalarWhereInput[]
  }

  export type ArticleCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArticleCategoryCreateWithoutCategoryInput, ArticleCategoryUncheckedCreateWithoutCategoryInput> | ArticleCategoryCreateWithoutCategoryInput[] | ArticleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutCategoryInput | ArticleCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput | ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArticleCategoryCreateManyCategoryInputEnvelope
    set?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    disconnect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    delete?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    connect?: ArticleCategoryWhereUniqueInput | ArticleCategoryWhereUniqueInput[]
    update?: ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput | ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArticleCategoryUpdateManyWithWhereWithoutCategoryInput | ArticleCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArticleCategoryScalarWhereInput | ArticleCategoryScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoriesInput
    connect?: ArticleWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoriesInput
    upsert?: ArticleUpsertWithoutCategoriesInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutCategoriesInput, ArticleUpdateWithoutCategoriesInput>, ArticleUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    upsert?: CategoryUpsertWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutArticlesInput, CategoryUpdateWithoutArticlesInput>, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type UserArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserArticleCreateWithoutUserInput, UserArticleUncheckedCreateWithoutUserInput> | UserArticleCreateWithoutUserInput[] | UserArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUserInput | UserArticleCreateOrConnectWithoutUserInput[]
    createMany?: UserArticleCreateManyUserInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ArticleViewCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleViewCreateWithoutUserInput, ArticleViewUncheckedCreateWithoutUserInput> | ArticleViewCreateWithoutUserInput[] | ArticleViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutUserInput | ArticleViewCreateOrConnectWithoutUserInput[]
    createMany?: ArticleViewCreateManyUserInputEnvelope
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
  }

  export type UserArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserArticleCreateWithoutUserInput, UserArticleUncheckedCreateWithoutUserInput> | UserArticleCreateWithoutUserInput[] | UserArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUserInput | UserArticleCreateOrConnectWithoutUserInput[]
    createMany?: UserArticleCreateManyUserInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ArticleViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleViewCreateWithoutUserInput, ArticleViewUncheckedCreateWithoutUserInput> | ArticleViewCreateWithoutUserInput[] | ArticleViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutUserInput | ArticleViewCreateOrConnectWithoutUserInput[]
    createMany?: ArticleViewCreateManyUserInputEnvelope
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
  }

  export type UserArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserArticleCreateWithoutUserInput, UserArticleUncheckedCreateWithoutUserInput> | UserArticleCreateWithoutUserInput[] | UserArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUserInput | UserArticleCreateOrConnectWithoutUserInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutUserInput | UserArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserArticleCreateManyUserInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutUserInput | UserArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutUserInput | UserArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ArticleViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleViewCreateWithoutUserInput, ArticleViewUncheckedCreateWithoutUserInput> | ArticleViewCreateWithoutUserInput[] | ArticleViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutUserInput | ArticleViewCreateOrConnectWithoutUserInput[]
    upsert?: ArticleViewUpsertWithWhereUniqueWithoutUserInput | ArticleViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleViewCreateManyUserInputEnvelope
    set?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    disconnect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    delete?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    update?: ArticleViewUpdateWithWhereUniqueWithoutUserInput | ArticleViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleViewUpdateManyWithWhereWithoutUserInput | ArticleViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleViewScalarWhereInput | ArticleViewScalarWhereInput[]
  }

  export type UserArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserArticleCreateWithoutUserInput, UserArticleUncheckedCreateWithoutUserInput> | UserArticleCreateWithoutUserInput[] | UserArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUserInput | UserArticleCreateOrConnectWithoutUserInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutUserInput | UserArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserArticleCreateManyUserInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutUserInput | UserArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutUserInput | UserArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ArticleViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleViewCreateWithoutUserInput, ArticleViewUncheckedCreateWithoutUserInput> | ArticleViewCreateWithoutUserInput[] | ArticleViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleViewCreateOrConnectWithoutUserInput | ArticleViewCreateOrConnectWithoutUserInput[]
    upsert?: ArticleViewUpsertWithWhereUniqueWithoutUserInput | ArticleViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleViewCreateManyUserInputEnvelope
    set?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    disconnect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    delete?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    connect?: ArticleViewWhereUniqueInput | ArticleViewWhereUniqueInput[]
    update?: ArticleViewUpdateWithWhereUniqueWithoutUserInput | ArticleViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleViewUpdateManyWithWhereWithoutUserInput | ArticleViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleViewScalarWhereInput | ArticleViewScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutUsersInput = {
    create?: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput
    upsert?: ArticleUpsertWithoutUsersInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutUsersInput, ArticleUpdateWithoutUsersInput>, ArticleUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    upsert?: ArticleUpsertWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutCommentsInput, ArticleUpdateWithoutCommentsInput>, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleCreateNestedOneWithoutViewsInput = {
    create?: XOR<ArticleCreateWithoutViewsInput, ArticleUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutViewsInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewsInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<ArticleCreateWithoutViewsInput, ArticleUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutViewsInput
    upsert?: ArticleUpsertWithoutViewsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutViewsInput, ArticleUpdateWithoutViewsInput>, ArticleUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    upsert?: UserUpsertWithoutViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsInput, UserUpdateWithoutViewsInput>, UserUncheckedUpdateWithoutViewsInput>
  }

  export type ArticleEraCreateNestedManyWithoutEraInput = {
    create?: XOR<ArticleEraCreateWithoutEraInput, ArticleEraUncheckedCreateWithoutEraInput> | ArticleEraCreateWithoutEraInput[] | ArticleEraUncheckedCreateWithoutEraInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutEraInput | ArticleEraCreateOrConnectWithoutEraInput[]
    createMany?: ArticleEraCreateManyEraInputEnvelope
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
  }

  export type ArticleEraUncheckedCreateNestedManyWithoutEraInput = {
    create?: XOR<ArticleEraCreateWithoutEraInput, ArticleEraUncheckedCreateWithoutEraInput> | ArticleEraCreateWithoutEraInput[] | ArticleEraUncheckedCreateWithoutEraInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutEraInput | ArticleEraCreateOrConnectWithoutEraInput[]
    createMany?: ArticleEraCreateManyEraInputEnvelope
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
  }

  export type ArticleEraUpdateManyWithoutEraNestedInput = {
    create?: XOR<ArticleEraCreateWithoutEraInput, ArticleEraUncheckedCreateWithoutEraInput> | ArticleEraCreateWithoutEraInput[] | ArticleEraUncheckedCreateWithoutEraInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutEraInput | ArticleEraCreateOrConnectWithoutEraInput[]
    upsert?: ArticleEraUpsertWithWhereUniqueWithoutEraInput | ArticleEraUpsertWithWhereUniqueWithoutEraInput[]
    createMany?: ArticleEraCreateManyEraInputEnvelope
    set?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    disconnect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    delete?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    update?: ArticleEraUpdateWithWhereUniqueWithoutEraInput | ArticleEraUpdateWithWhereUniqueWithoutEraInput[]
    updateMany?: ArticleEraUpdateManyWithWhereWithoutEraInput | ArticleEraUpdateManyWithWhereWithoutEraInput[]
    deleteMany?: ArticleEraScalarWhereInput | ArticleEraScalarWhereInput[]
  }

  export type ArticleEraUncheckedUpdateManyWithoutEraNestedInput = {
    create?: XOR<ArticleEraCreateWithoutEraInput, ArticleEraUncheckedCreateWithoutEraInput> | ArticleEraCreateWithoutEraInput[] | ArticleEraUncheckedCreateWithoutEraInput[]
    connectOrCreate?: ArticleEraCreateOrConnectWithoutEraInput | ArticleEraCreateOrConnectWithoutEraInput[]
    upsert?: ArticleEraUpsertWithWhereUniqueWithoutEraInput | ArticleEraUpsertWithWhereUniqueWithoutEraInput[]
    createMany?: ArticleEraCreateManyEraInputEnvelope
    set?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    disconnect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    delete?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    connect?: ArticleEraWhereUniqueInput | ArticleEraWhereUniqueInput[]
    update?: ArticleEraUpdateWithWhereUniqueWithoutEraInput | ArticleEraUpdateWithWhereUniqueWithoutEraInput[]
    updateMany?: ArticleEraUpdateManyWithWhereWithoutEraInput | ArticleEraUpdateManyWithWhereWithoutEraInput[]
    deleteMany?: ArticleEraScalarWhereInput | ArticleEraScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutErasInput = {
    create?: XOR<ArticleCreateWithoutErasInput, ArticleUncheckedCreateWithoutErasInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutErasInput
    connect?: ArticleWhereUniqueInput
  }

  export type EraCreateNestedOneWithoutArticlesInput = {
    create?: XOR<EraCreateWithoutArticlesInput, EraUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: EraCreateOrConnectWithoutArticlesInput
    connect?: EraWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutErasNestedInput = {
    create?: XOR<ArticleCreateWithoutErasInput, ArticleUncheckedCreateWithoutErasInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutErasInput
    upsert?: ArticleUpsertWithoutErasInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutErasInput, ArticleUpdateWithoutErasInput>, ArticleUncheckedUpdateWithoutErasInput>
  }

  export type EraUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<EraCreateWithoutArticlesInput, EraUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: EraCreateOrConnectWithoutArticlesInput
    upsert?: EraUpsertWithoutArticlesInput
    connect?: EraWhereUniqueInput
    update?: XOR<XOR<EraUpdateToOneWithWhereWithoutArticlesInput, EraUpdateWithoutArticlesInput>, EraUncheckedUpdateWithoutArticlesInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ArticleCategoryCreateWithoutArticleInput = {
    category: CategoryCreateNestedOneWithoutArticlesInput
  }

  export type ArticleCategoryUncheckedCreateWithoutArticleInput = {
    categoryId: number
  }

  export type ArticleCategoryCreateOrConnectWithoutArticleInput = {
    where: ArticleCategoryWhereUniqueInput
    create: XOR<ArticleCategoryCreateWithoutArticleInput, ArticleCategoryUncheckedCreateWithoutArticleInput>
  }

  export type ArticleCategoryCreateManyArticleInputEnvelope = {
    data: ArticleCategoryCreateManyArticleInput | ArticleCategoryCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserArticleCreateWithoutArticleInput = {
    user: UserCreateNestedOneWithoutArticlesInput
  }

  export type UserArticleUncheckedCreateWithoutArticleInput = {
    userId: number
  }

  export type UserArticleCreateOrConnectWithoutArticleInput = {
    where: UserArticleWhereUniqueInput
    create: XOR<UserArticleCreateWithoutArticleInput, UserArticleUncheckedCreateWithoutArticleInput>
  }

  export type UserArticleCreateManyArticleInputEnvelope = {
    data: UserArticleCreateManyArticleInput | UserArticleCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutArticleInput = {
    body: string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutArticleInput = {
    id?: number
    userId: number
    body: string
  }

  export type CommentsCreateOrConnectWithoutArticleInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutArticleInput, CommentsUncheckedCreateWithoutArticleInput>
  }

  export type CommentsCreateManyArticleInputEnvelope = {
    data: CommentsCreateManyArticleInput | CommentsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleViewCreateWithoutArticleInput = {
    viewedAt: Date | string
    user: UserCreateNestedOneWithoutViewsInput
  }

  export type ArticleViewUncheckedCreateWithoutArticleInput = {
    userId: number
    viewedAt: Date | string
  }

  export type ArticleViewCreateOrConnectWithoutArticleInput = {
    where: ArticleViewWhereUniqueInput
    create: XOR<ArticleViewCreateWithoutArticleInput, ArticleViewUncheckedCreateWithoutArticleInput>
  }

  export type ArticleViewCreateManyArticleInputEnvelope = {
    data: ArticleViewCreateManyArticleInput | ArticleViewCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleEraCreateWithoutArticleInput = {
    era: EraCreateNestedOneWithoutArticlesInput
  }

  export type ArticleEraUncheckedCreateWithoutArticleInput = {
    eraId: number
  }

  export type ArticleEraCreateOrConnectWithoutArticleInput = {
    where: ArticleEraWhereUniqueInput
    create: XOR<ArticleEraCreateWithoutArticleInput, ArticleEraUncheckedCreateWithoutArticleInput>
  }

  export type ArticleEraCreateManyArticleInputEnvelope = {
    data: ArticleEraCreateManyArticleInput | ArticleEraCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleCategoryWhereUniqueInput
    update: XOR<ArticleCategoryUpdateWithoutArticleInput, ArticleCategoryUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleCategoryCreateWithoutArticleInput, ArticleCategoryUncheckedCreateWithoutArticleInput>
  }

  export type ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleCategoryWhereUniqueInput
    data: XOR<ArticleCategoryUpdateWithoutArticleInput, ArticleCategoryUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleCategoryUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleCategoryScalarWhereInput
    data: XOR<ArticleCategoryUpdateManyMutationInput, ArticleCategoryUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleCategoryScalarWhereInput = {
    AND?: ArticleCategoryScalarWhereInput | ArticleCategoryScalarWhereInput[]
    OR?: ArticleCategoryScalarWhereInput[]
    NOT?: ArticleCategoryScalarWhereInput | ArticleCategoryScalarWhereInput[]
    articleId?: IntFilter<"ArticleCategory"> | number
    categoryId?: IntFilter<"ArticleCategory"> | number
  }

  export type UserArticleUpsertWithWhereUniqueWithoutArticleInput = {
    where: UserArticleWhereUniqueInput
    update: XOR<UserArticleUpdateWithoutArticleInput, UserArticleUncheckedUpdateWithoutArticleInput>
    create: XOR<UserArticleCreateWithoutArticleInput, UserArticleUncheckedCreateWithoutArticleInput>
  }

  export type UserArticleUpdateWithWhereUniqueWithoutArticleInput = {
    where: UserArticleWhereUniqueInput
    data: XOR<UserArticleUpdateWithoutArticleInput, UserArticleUncheckedUpdateWithoutArticleInput>
  }

  export type UserArticleUpdateManyWithWhereWithoutArticleInput = {
    where: UserArticleScalarWhereInput
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyWithoutArticleInput>
  }

  export type UserArticleScalarWhereInput = {
    AND?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
    OR?: UserArticleScalarWhereInput[]
    NOT?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
    articleId?: IntFilter<"UserArticle"> | number
    userId?: IntFilter<"UserArticle"> | number
  }

  export type CommentsUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutArticleInput, CommentsUncheckedUpdateWithoutArticleInput>
    create: XOR<CommentsCreateWithoutArticleInput, CommentsUncheckedCreateWithoutArticleInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutArticleInput, CommentsUncheckedUpdateWithoutArticleInput>
  }

  export type CommentsUpdateManyWithWhereWithoutArticleInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutArticleInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    articleId?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    body?: StringFilter<"Comments"> | string
  }

  export type ArticleViewUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleViewWhereUniqueInput
    update: XOR<ArticleViewUpdateWithoutArticleInput, ArticleViewUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleViewCreateWithoutArticleInput, ArticleViewUncheckedCreateWithoutArticleInput>
  }

  export type ArticleViewUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleViewWhereUniqueInput
    data: XOR<ArticleViewUpdateWithoutArticleInput, ArticleViewUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleViewUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleViewScalarWhereInput
    data: XOR<ArticleViewUpdateManyMutationInput, ArticleViewUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleViewScalarWhereInput = {
    AND?: ArticleViewScalarWhereInput | ArticleViewScalarWhereInput[]
    OR?: ArticleViewScalarWhereInput[]
    NOT?: ArticleViewScalarWhereInput | ArticleViewScalarWhereInput[]
    articleId?: IntFilter<"ArticleView"> | number
    userId?: IntFilter<"ArticleView"> | number
    viewedAt?: DateTimeFilter<"ArticleView"> | Date | string
  }

  export type ArticleEraUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleEraWhereUniqueInput
    update: XOR<ArticleEraUpdateWithoutArticleInput, ArticleEraUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleEraCreateWithoutArticleInput, ArticleEraUncheckedCreateWithoutArticleInput>
  }

  export type ArticleEraUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleEraWhereUniqueInput
    data: XOR<ArticleEraUpdateWithoutArticleInput, ArticleEraUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleEraUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleEraScalarWhereInput
    data: XOR<ArticleEraUpdateManyMutationInput, ArticleEraUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleEraScalarWhereInput = {
    AND?: ArticleEraScalarWhereInput | ArticleEraScalarWhereInput[]
    OR?: ArticleEraScalarWhereInput[]
    NOT?: ArticleEraScalarWhereInput | ArticleEraScalarWhereInput[]
    articleId?: IntFilter<"ArticleEra"> | number
    eraId?: IntFilter<"ArticleEra"> | number
  }

  export type ArticleCategoryCreateWithoutCategoryInput = {
    article: ArticleCreateNestedOneWithoutCategoriesInput
  }

  export type ArticleCategoryUncheckedCreateWithoutCategoryInput = {
    articleId: number
  }

  export type ArticleCategoryCreateOrConnectWithoutCategoryInput = {
    where: ArticleCategoryWhereUniqueInput
    create: XOR<ArticleCategoryCreateWithoutCategoryInput, ArticleCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleCategoryCreateManyCategoryInputEnvelope = {
    data: ArticleCategoryCreateManyCategoryInput | ArticleCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ArticleCategoryWhereUniqueInput
    update: XOR<ArticleCategoryUpdateWithoutCategoryInput, ArticleCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ArticleCategoryCreateWithoutCategoryInput, ArticleCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ArticleCategoryWhereUniqueInput
    data: XOR<ArticleCategoryUpdateWithoutCategoryInput, ArticleCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ArticleCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ArticleCategoryScalarWhereInput
    data: XOR<ArticleCategoryUpdateManyMutationInput, ArticleCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ArticleCreateWithoutCategoriesInput = {
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    users?: UserArticleCreateNestedManyWithoutArticleInput
    comments?: CommentsCreateNestedManyWithoutArticleInput
    views?: ArticleViewCreateNestedManyWithoutArticleInput
    eras?: ArticleEraCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    users?: UserArticleUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentsUncheckedCreateNestedManyWithoutArticleInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutArticleInput
    eras?: ArticleEraUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCategoriesInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutArticlesInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutArticlesInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutArticlesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleUpsertWithoutCategoriesInput = {
    update: XOR<ArticleUpdateWithoutCategoriesInput, ArticleUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutCategoriesInput, ArticleUncheckedUpdateWithoutCategoriesInput>
  }

  export type ArticleUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    users?: UserArticleUpdateManyWithoutArticleNestedInput
    comments?: CommentsUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    users?: UserArticleUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type CategoryUpsertWithoutArticlesInput = {
    update: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutArticlesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type CategoryUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserArticleCreateWithoutUserInput = {
    article: ArticleCreateNestedOneWithoutUsersInput
  }

  export type UserArticleUncheckedCreateWithoutUserInput = {
    articleId: number
  }

  export type UserArticleCreateOrConnectWithoutUserInput = {
    where: UserArticleWhereUniqueInput
    create: XOR<UserArticleCreateWithoutUserInput, UserArticleUncheckedCreateWithoutUserInput>
  }

  export type UserArticleCreateManyUserInputEnvelope = {
    data: UserArticleCreateManyUserInput | UserArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    body: string
    article: ArticleCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    articleId: number
    body: string
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleViewCreateWithoutUserInput = {
    viewedAt: Date | string
    article: ArticleCreateNestedOneWithoutViewsInput
  }

  export type ArticleViewUncheckedCreateWithoutUserInput = {
    articleId: number
    viewedAt: Date | string
  }

  export type ArticleViewCreateOrConnectWithoutUserInput = {
    where: ArticleViewWhereUniqueInput
    create: XOR<ArticleViewCreateWithoutUserInput, ArticleViewUncheckedCreateWithoutUserInput>
  }

  export type ArticleViewCreateManyUserInputEnvelope = {
    data: ArticleViewCreateManyUserInput | ArticleViewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserArticleWhereUniqueInput
    update: XOR<UserArticleUpdateWithoutUserInput, UserArticleUncheckedUpdateWithoutUserInput>
    create: XOR<UserArticleCreateWithoutUserInput, UserArticleUncheckedCreateWithoutUserInput>
  }

  export type UserArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserArticleWhereUniqueInput
    data: XOR<UserArticleUpdateWithoutUserInput, UserArticleUncheckedUpdateWithoutUserInput>
  }

  export type UserArticleUpdateManyWithWhereWithoutUserInput = {
    where: UserArticleScalarWhereInput
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleViewUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleViewWhereUniqueInput
    update: XOR<ArticleViewUpdateWithoutUserInput, ArticleViewUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleViewCreateWithoutUserInput, ArticleViewUncheckedCreateWithoutUserInput>
  }

  export type ArticleViewUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleViewWhereUniqueInput
    data: XOR<ArticleViewUpdateWithoutUserInput, ArticleViewUncheckedUpdateWithoutUserInput>
  }

  export type ArticleViewUpdateManyWithWhereWithoutUserInput = {
    where: ArticleViewScalarWhereInput
    data: XOR<ArticleViewUpdateManyMutationInput, ArticleViewUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleCreateWithoutUsersInput = {
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryCreateNestedManyWithoutArticleInput
    comments?: CommentsCreateNestedManyWithoutArticleInput
    views?: ArticleViewCreateNestedManyWithoutArticleInput
    eras?: ArticleEraCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentsUncheckedCreateNestedManyWithoutArticleInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutArticleInput
    eras?: ArticleEraUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutUsersInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutArticlesInput = {
    username: string
    displayName: string
    comments?: CommentsCreateNestedManyWithoutUserInput
    views?: ArticleViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: number
    username: string
    displayName: string
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleUpsertWithoutUsersInput = {
    update: XOR<ArticleUpdateWithoutUsersInput, ArticleUncheckedUpdateWithoutUsersInput>
    create: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutUsersInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutUsersInput, ArticleUncheckedUpdateWithoutUsersInput>
  }

  export type ArticleUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUpdateManyWithoutArticleNestedInput
    comments?: CommentsUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    comments?: CommentsUpdateManyWithoutUserNestedInput
    views?: ArticleViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateWithoutCommentsInput = {
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryCreateNestedManyWithoutArticleInput
    users?: UserArticleCreateNestedManyWithoutArticleInput
    views?: ArticleViewCreateNestedManyWithoutArticleInput
    eras?: ArticleEraCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput
    users?: UserArticleUncheckedCreateNestedManyWithoutArticleInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutArticleInput
    eras?: ArticleEraUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCommentsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    username: string
    displayName: string
    articles?: UserArticleCreateNestedManyWithoutUserInput
    views?: ArticleViewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    username: string
    displayName: string
    articles?: UserArticleUncheckedCreateNestedManyWithoutUserInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ArticleUpsertWithoutCommentsInput = {
    update: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUpdateManyWithoutArticleNestedInput
    users?: UserArticleUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput
    users?: UserArticleUncheckedUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    articles?: UserArticleUpdateManyWithoutUserNestedInput
    views?: ArticleViewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    articles?: UserArticleUncheckedUpdateManyWithoutUserNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateWithoutViewsInput = {
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryCreateNestedManyWithoutArticleInput
    users?: UserArticleCreateNestedManyWithoutArticleInput
    comments?: CommentsCreateNestedManyWithoutArticleInput
    eras?: ArticleEraCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutViewsInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput
    users?: UserArticleUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentsUncheckedCreateNestedManyWithoutArticleInput
    eras?: ArticleEraUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutViewsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutViewsInput, ArticleUncheckedCreateWithoutViewsInput>
  }

  export type UserCreateWithoutViewsInput = {
    username: string
    displayName: string
    articles?: UserArticleCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutViewsInput = {
    id?: number
    username: string
    displayName: string
    articles?: UserArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type ArticleUpsertWithoutViewsInput = {
    update: XOR<ArticleUpdateWithoutViewsInput, ArticleUncheckedUpdateWithoutViewsInput>
    create: XOR<ArticleCreateWithoutViewsInput, ArticleUncheckedCreateWithoutViewsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutViewsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutViewsInput, ArticleUncheckedUpdateWithoutViewsInput>
  }

  export type ArticleUpdateWithoutViewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUpdateManyWithoutArticleNestedInput
    users?: UserArticleUpdateManyWithoutArticleNestedInput
    comments?: CommentsUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput
    users?: UserArticleUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutArticleNestedInput
    eras?: ArticleEraUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutViewsInput = {
    update: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateWithoutViewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    articles?: UserArticleUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    articles?: UserArticleUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleEraCreateWithoutEraInput = {
    article: ArticleCreateNestedOneWithoutErasInput
  }

  export type ArticleEraUncheckedCreateWithoutEraInput = {
    articleId: number
  }

  export type ArticleEraCreateOrConnectWithoutEraInput = {
    where: ArticleEraWhereUniqueInput
    create: XOR<ArticleEraCreateWithoutEraInput, ArticleEraUncheckedCreateWithoutEraInput>
  }

  export type ArticleEraCreateManyEraInputEnvelope = {
    data: ArticleEraCreateManyEraInput | ArticleEraCreateManyEraInput[]
    skipDuplicates?: boolean
  }

  export type ArticleEraUpsertWithWhereUniqueWithoutEraInput = {
    where: ArticleEraWhereUniqueInput
    update: XOR<ArticleEraUpdateWithoutEraInput, ArticleEraUncheckedUpdateWithoutEraInput>
    create: XOR<ArticleEraCreateWithoutEraInput, ArticleEraUncheckedCreateWithoutEraInput>
  }

  export type ArticleEraUpdateWithWhereUniqueWithoutEraInput = {
    where: ArticleEraWhereUniqueInput
    data: XOR<ArticleEraUpdateWithoutEraInput, ArticleEraUncheckedUpdateWithoutEraInput>
  }

  export type ArticleEraUpdateManyWithWhereWithoutEraInput = {
    where: ArticleEraScalarWhereInput
    data: XOR<ArticleEraUpdateManyMutationInput, ArticleEraUncheckedUpdateManyWithoutEraInput>
  }

  export type ArticleCreateWithoutErasInput = {
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryCreateNestedManyWithoutArticleInput
    users?: UserArticleCreateNestedManyWithoutArticleInput
    comments?: CommentsCreateNestedManyWithoutArticleInput
    views?: ArticleViewCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutErasInput = {
    id?: number
    title: string
    body: string
    author: string
    date: Date | string
    contentDate: Date | string
    tags: string
    categories?: ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput
    users?: UserArticleUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentsUncheckedCreateNestedManyWithoutArticleInput
    views?: ArticleViewUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutErasInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutErasInput, ArticleUncheckedCreateWithoutErasInput>
  }

  export type EraCreateWithoutArticlesInput = {
    name: string
  }

  export type EraUncheckedCreateWithoutArticlesInput = {
    id?: number
    name: string
  }

  export type EraCreateOrConnectWithoutArticlesInput = {
    where: EraWhereUniqueInput
    create: XOR<EraCreateWithoutArticlesInput, EraUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleUpsertWithoutErasInput = {
    update: XOR<ArticleUpdateWithoutErasInput, ArticleUncheckedUpdateWithoutErasInput>
    create: XOR<ArticleCreateWithoutErasInput, ArticleUncheckedCreateWithoutErasInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutErasInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutErasInput, ArticleUncheckedUpdateWithoutErasInput>
  }

  export type ArticleUpdateWithoutErasInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUpdateManyWithoutArticleNestedInput
    users?: UserArticleUpdateManyWithoutArticleNestedInput
    comments?: CommentsUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutErasInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: StringFieldUpdateOperationsInput | string
    categories?: ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput
    users?: UserArticleUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutArticleNestedInput
    views?: ArticleViewUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type EraUpsertWithoutArticlesInput = {
    update: XOR<EraUpdateWithoutArticlesInput, EraUncheckedUpdateWithoutArticlesInput>
    create: XOR<EraCreateWithoutArticlesInput, EraUncheckedCreateWithoutArticlesInput>
    where?: EraWhereInput
  }

  export type EraUpdateToOneWithWhereWithoutArticlesInput = {
    where?: EraWhereInput
    data: XOR<EraUpdateWithoutArticlesInput, EraUncheckedUpdateWithoutArticlesInput>
  }

  export type EraUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EraUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleCategoryCreateManyArticleInput = {
    categoryId: number
  }

  export type UserArticleCreateManyArticleInput = {
    userId: number
  }

  export type CommentsCreateManyArticleInput = {
    id?: number
    userId: number
    body: string
  }

  export type ArticleViewCreateManyArticleInput = {
    userId: number
    viewedAt: Date | string
  }

  export type ArticleEraCreateManyArticleInput = {
    eraId: number
  }

  export type ArticleCategoryUpdateWithoutArticleInput = {
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleCategoryUncheckedUpdateWithoutArticleInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCategoryUncheckedUpdateManyWithoutArticleInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleUpdateWithoutArticleInput = {
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type UserArticleUncheckedUpdateWithoutArticleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleUncheckedUpdateManyWithoutArticleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUpdateWithoutArticleInput = {
    body?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleViewUpdateWithoutArticleInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ArticleViewUncheckedUpdateWithoutArticleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleViewUncheckedUpdateManyWithoutArticleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEraUpdateWithoutArticleInput = {
    era?: EraUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleEraUncheckedUpdateWithoutArticleInput = {
    eraId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleEraUncheckedUpdateManyWithoutArticleInput = {
    eraId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCategoryCreateManyCategoryInput = {
    articleId: number
  }

  export type ArticleCategoryUpdateWithoutCategoryInput = {
    article?: ArticleUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ArticleCategoryUncheckedUpdateWithoutCategoryInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCategoryUncheckedUpdateManyWithoutCategoryInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleCreateManyUserInput = {
    articleId: number
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    articleId: number
    body: string
  }

  export type ArticleViewCreateManyUserInput = {
    articleId: number
    viewedAt: Date | string
  }

  export type UserArticleUpdateWithoutUserInput = {
    article?: ArticleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserArticleUncheckedUpdateWithoutUserInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleUncheckedUpdateManyWithoutUserInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUpdateWithoutUserInput = {
    body?: StringFieldUpdateOperationsInput | string
    article?: ArticleUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleViewUpdateWithoutUserInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ArticleViewUncheckedUpdateWithoutUserInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleViewUncheckedUpdateManyWithoutUserInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEraCreateManyEraInput = {
    articleId: number
  }

  export type ArticleEraUpdateWithoutEraInput = {
    article?: ArticleUpdateOneRequiredWithoutErasNestedInput
  }

  export type ArticleEraUncheckedUpdateWithoutEraInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleEraUncheckedUpdateManyWithoutEraInput = {
    articleId?: IntFieldUpdateOperationsInput | number
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