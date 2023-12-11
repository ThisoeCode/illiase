import mongoose from "mongoose"

export const insu = async () => {
  try {
    mongoose.connect(process.env.DB_URI)
    mongoose.connection.on("error", (e) => {
      console.error(
        "[Illiase] DB connection err: " + e
      )
      process.exit()
    });
  } catch (e) {
    console.error("[Illiase] DB fatal: " + e);
  }
}