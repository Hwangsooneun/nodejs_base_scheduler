const isHoliday = async (db) => {
  const query = 'select date from holiday_data where date = now()'
  const [date, fields] = await db.query(query)
  if (date.length) {
    return true
  }
  return false
}

module.exports = { isHoliday }