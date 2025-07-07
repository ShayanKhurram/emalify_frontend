
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
 * Model Leads
 * 
 */
export type Leads = $Result.DefaultSelection<Prisma.$LeadsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Leads
 * const leads = await prisma.leads.findMany()
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
   * // Fetch zero or more Leads
   * const leads = await prisma.leads.findMany()
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
   * `prisma.leads`: Exposes CRUD operations for the **Leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.LeadsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    Leads: 'Leads'
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
      modelProps: "leads"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Leads: {
        payload: Prisma.$LeadsPayload<ExtArgs>
        fields: Prisma.LeadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          findFirst: {
            args: Prisma.LeadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          findMany: {
            args: Prisma.LeadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          create: {
            args: Prisma.LeadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          createMany: {
            args: Prisma.LeadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          delete: {
            args: Prisma.LeadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          update: {
            args: Prisma.LeadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          deleteMany: {
            args: Prisma.LeadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          upsert: {
            args: Prisma.LeadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.LeadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
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
    leads?: LeadsOmit
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
   * Models
   */

  /**
   * Model Leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    id: number | null
    need_score: number | null
  }

  export type LeadsSumAggregateOutputType = {
    id: number | null
    need_score: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    job_title: string | null
    industry: string | null
    lead_source: string | null
    pain_point: string | null
    need_score: number | null
    message: string | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    job_title: string | null
    industry: string | null
    lead_source: string | null
    pain_point: string | null
    need_score: number | null
    message: string | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    job_title: number
    industry: number
    lead_source: number
    pain_point: number
    need_score: number
    message: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    id?: true
    need_score?: true
  }

  export type LeadsSumAggregateInputType = {
    id?: true
    need_score?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    job_title?: true
    industry?: true
    lead_source?: true
    pain_point?: true
    need_score?: true
    message?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    job_title?: true
    industry?: true
    lead_source?: true
    pain_point?: true
    need_score?: true
    message?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    job_title?: true
    industry?: true
    lead_source?: true
    pain_point?: true
    need_score?: true
    message?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to aggregate.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type LeadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsWhereInput
    orderBy?: LeadsOrderByWithAggregationInput | LeadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: LeadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: number
    name: string
    email: string
    company: string
    job_title: string
    industry: string
    lead_source: string
    pain_point: string
    need_score: number
    message: string
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends LeadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type LeadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    job_title?: boolean
    industry?: boolean
    lead_source?: boolean
    pain_point?: boolean
    need_score?: boolean
    message?: boolean
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    job_title?: boolean
    industry?: boolean
    lead_source?: boolean
    pain_point?: boolean
    need_score?: boolean
    message?: boolean
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    job_title?: boolean
    industry?: boolean
    lead_source?: boolean
    pain_point?: boolean
    need_score?: boolean
    message?: boolean
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    job_title?: boolean
    industry?: boolean
    lead_source?: boolean
    pain_point?: boolean
    need_score?: boolean
    message?: boolean
  }

  export type LeadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "company" | "job_title" | "industry" | "lead_source" | "pain_point" | "need_score" | "message", ExtArgs["result"]["leads"]>

  export type $LeadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leads"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      company: string
      job_title: string
      industry: string
      lead_source: string
      pain_point: string
      need_score: number
      message: string
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type LeadsGetPayload<S extends boolean | null | undefined | LeadsDefaultArgs> = $Result.GetResult<Prisma.$LeadsPayload, S>

  type LeadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface LeadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leads'], meta: { name: 'Leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {LeadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadsFindUniqueArgs>(args: SelectSubset<T, LeadsFindUniqueArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadsFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadsFindFirstArgs>(args?: SelectSubset<T, LeadsFindFirstArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadsFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadsFindManyArgs>(args?: SelectSubset<T, LeadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {LeadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends LeadsCreateArgs>(args: SelectSubset<T, LeadsCreateArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadsCreateManyArgs>(args?: SelectSubset<T, LeadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadsCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {LeadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends LeadsDeleteArgs>(args: SelectSubset<T, LeadsDeleteArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {LeadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadsUpdateArgs>(args: SelectSubset<T, LeadsUpdateArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadsDeleteManyArgs>(args?: SelectSubset<T, LeadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadsUpdateManyArgs>(args: SelectSubset<T, LeadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadsUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {LeadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends LeadsUpsertArgs>(args: SelectSubset<T, LeadsUpsertArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadsCountArgs>(
      args?: Subset<T, LeadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsGroupByArgs} args - Group by arguments.
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
      T extends LeadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadsGroupByArgs['orderBy'] }
        : { orderBy?: LeadsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leads model
   */
  readonly fields: LeadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Leads model
   */
  interface LeadsFieldRefs {
    readonly id: FieldRef<"Leads", 'Int'>
    readonly name: FieldRef<"Leads", 'String'>
    readonly email: FieldRef<"Leads", 'String'>
    readonly company: FieldRef<"Leads", 'String'>
    readonly job_title: FieldRef<"Leads", 'String'>
    readonly industry: FieldRef<"Leads", 'String'>
    readonly lead_source: FieldRef<"Leads", 'String'>
    readonly pain_point: FieldRef<"Leads", 'String'>
    readonly need_score: FieldRef<"Leads", 'Int'>
    readonly message: FieldRef<"Leads", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Leads findUnique
   */
  export type LeadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads findUniqueOrThrow
   */
  export type LeadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads findFirst
   */
  export type LeadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads findFirstOrThrow
   */
  export type LeadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads findMany
   */
  export type LeadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads create
   */
  export type LeadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data needed to create a Leads.
     */
    data: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>
  }

  /**
   * Leads createMany
   */
  export type LeadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leads createManyAndReturn
   */
  export type LeadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leads update
   */
  export type LeadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data needed to update a Leads.
     */
    data: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>
    /**
     * Choose, which Leads to update.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads updateMany
   */
  export type LeadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Leads updateManyAndReturn
   */
  export type LeadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Leads upsert
   */
  export type LeadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The filter to search for the Leads to update in case it exists.
     */
    where: LeadsWhereUniqueInput
    /**
     * In case the Leads found by the `where` argument doesn't exist, create a new Leads with this data.
     */
    create: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>
    /**
     * In case the Leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>
  }

  /**
   * Leads delete
   */
  export type LeadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Filter which Leads to delete.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads deleteMany
   */
  export type LeadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Leads without action
   */
  export type LeadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
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


  export const LeadsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company',
    job_title: 'job_title',
    industry: 'industry',
    lead_source: 'lead_source',
    pain_point: 'pain_point',
    need_score: 'need_score',
    message: 'message'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


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


  export type LeadsWhereInput = {
    AND?: LeadsWhereInput | LeadsWhereInput[]
    OR?: LeadsWhereInput[]
    NOT?: LeadsWhereInput | LeadsWhereInput[]
    id?: IntFilter<"Leads"> | number
    name?: StringFilter<"Leads"> | string
    email?: StringFilter<"Leads"> | string
    company?: StringFilter<"Leads"> | string
    job_title?: StringFilter<"Leads"> | string
    industry?: StringFilter<"Leads"> | string
    lead_source?: StringFilter<"Leads"> | string
    pain_point?: StringFilter<"Leads"> | string
    need_score?: IntFilter<"Leads"> | number
    message?: StringFilter<"Leads"> | string
  }

  export type LeadsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job_title?: SortOrder
    industry?: SortOrder
    lead_source?: SortOrder
    pain_point?: SortOrder
    need_score?: SortOrder
    message?: SortOrder
  }

  export type LeadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeadsWhereInput | LeadsWhereInput[]
    OR?: LeadsWhereInput[]
    NOT?: LeadsWhereInput | LeadsWhereInput[]
    name?: StringFilter<"Leads"> | string
    email?: StringFilter<"Leads"> | string
    company?: StringFilter<"Leads"> | string
    job_title?: StringFilter<"Leads"> | string
    industry?: StringFilter<"Leads"> | string
    lead_source?: StringFilter<"Leads"> | string
    pain_point?: StringFilter<"Leads"> | string
    need_score?: IntFilter<"Leads"> | number
    message?: StringFilter<"Leads"> | string
  }, "id">

  export type LeadsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job_title?: SortOrder
    industry?: SortOrder
    lead_source?: SortOrder
    pain_point?: SortOrder
    need_score?: SortOrder
    message?: SortOrder
    _count?: LeadsCountOrderByAggregateInput
    _avg?: LeadsAvgOrderByAggregateInput
    _max?: LeadsMaxOrderByAggregateInput
    _min?: LeadsMinOrderByAggregateInput
    _sum?: LeadsSumOrderByAggregateInput
  }

  export type LeadsScalarWhereWithAggregatesInput = {
    AND?: LeadsScalarWhereWithAggregatesInput | LeadsScalarWhereWithAggregatesInput[]
    OR?: LeadsScalarWhereWithAggregatesInput[]
    NOT?: LeadsScalarWhereWithAggregatesInput | LeadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leads"> | number
    name?: StringWithAggregatesFilter<"Leads"> | string
    email?: StringWithAggregatesFilter<"Leads"> | string
    company?: StringWithAggregatesFilter<"Leads"> | string
    job_title?: StringWithAggregatesFilter<"Leads"> | string
    industry?: StringWithAggregatesFilter<"Leads"> | string
    lead_source?: StringWithAggregatesFilter<"Leads"> | string
    pain_point?: StringWithAggregatesFilter<"Leads"> | string
    need_score?: IntWithAggregatesFilter<"Leads"> | number
    message?: StringWithAggregatesFilter<"Leads"> | string
  }

  export type LeadsCreateInput = {
    name: string
    email: string
    company: string
    job_title: string
    industry: string
    lead_source: string
    pain_point: string
    need_score: number
    message: string
  }

  export type LeadsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    company: string
    job_title: string
    industry: string
    lead_source: string
    pain_point: string
    need_score: number
    message: string
  }

  export type LeadsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    lead_source?: StringFieldUpdateOperationsInput | string
    pain_point?: StringFieldUpdateOperationsInput | string
    need_score?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LeadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    lead_source?: StringFieldUpdateOperationsInput | string
    pain_point?: StringFieldUpdateOperationsInput | string
    need_score?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LeadsCreateManyInput = {
    id?: number
    name: string
    email: string
    company: string
    job_title: string
    industry: string
    lead_source: string
    pain_point: string
    need_score: number
    message: string
  }

  export type LeadsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    lead_source?: StringFieldUpdateOperationsInput | string
    pain_point?: StringFieldUpdateOperationsInput | string
    need_score?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LeadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    lead_source?: StringFieldUpdateOperationsInput | string
    pain_point?: StringFieldUpdateOperationsInput | string
    need_score?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
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

  export type LeadsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job_title?: SortOrder
    industry?: SortOrder
    lead_source?: SortOrder
    pain_point?: SortOrder
    need_score?: SortOrder
    message?: SortOrder
  }

  export type LeadsAvgOrderByAggregateInput = {
    id?: SortOrder
    need_score?: SortOrder
  }

  export type LeadsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job_title?: SortOrder
    industry?: SortOrder
    lead_source?: SortOrder
    pain_point?: SortOrder
    need_score?: SortOrder
    message?: SortOrder
  }

  export type LeadsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job_title?: SortOrder
    industry?: SortOrder
    lead_source?: SortOrder
    pain_point?: SortOrder
    need_score?: SortOrder
    message?: SortOrder
  }

  export type LeadsSumOrderByAggregateInput = {
    id?: SortOrder
    need_score?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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