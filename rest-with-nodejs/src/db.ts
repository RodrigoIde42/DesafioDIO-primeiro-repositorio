import { Pool } from 'pg';

const connectionString = 'postgres://neuhdjya:axED_uMGvmxAtV6qJne97vMWsi6IVn-x@kesavan.db.elephantsql.com/neuhdjya';

const db = new Pool({ connectionString });

export default db;