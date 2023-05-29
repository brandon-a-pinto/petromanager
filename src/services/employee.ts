import SQLite from 'tauri-plugin-sqlite-api'

type Employee = {
  name: string
  job: string
  unity: string
  registration: string
  status: string
  management: string
}

const db = await SQLite.open('./sql.db')

export const init = async () =>
  await db.execute(`
    CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,
    job TEXT, unity TEXT, registration TEXT, status TEXT, management TEXT);
`)

export const fetch = async () => {
  await init()
  const res = db.select<Array<Employee>>(`SELECT * FROM employees;`)
  return res
}

export const add = async (params: Employee) =>
  // await db.execute('INSERT INTO employees (name, job, unity, registration, status, management) VALUES (?1, ?2, ?3, ?4, ?5, ?6)', [params.name, params.job, params.unity, params.registration, params.status, params.management])
  await db.execute(
    `
    INSERT INTO employees (name, job, unity, registration, status, management)
    VALUES (?1, ?2, ?3, ?4, ?5, ?6); 
    `,
    [
      params.name,
      params.job,
      params.unity,
      params.registration,
      params.status,
      params.management
    ]
  )

export const update = async (params: Employee) =>
  await db.execute(
    `
    UPDATE employees SET name='?1', job='?2', unity='?3', registration='?4',
    status='?5', management='?6'
    VALUES (?1, ?2, ?3, ?4, ?5, ?6); 
    `,
    [
      params.name,
      params.job,
      params.unity,
      params.registration,
      params.status,
      params.management
    ]
  )

export const remove = async (id: number): Promise<void> => {
  await db.execute(
    `
    DELETE FROM employees WHERE id=?1;
    `,
    [id]
  )
}
