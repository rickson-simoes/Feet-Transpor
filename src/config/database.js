module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'fastfeet',
  database: 'fastfeetPostgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
