import { NextApiHandler } from "next"
import { users } from "data/db"

const Users: NextApiHandler = async function (req, res) {
  res.json(await users.select().limit(20))
}

export default Users
