import mongoose from "mongoose";
import { HoldingSchema } from "../schemas/HoldingSchema.js";

const HoldingsModel = mongoose.model("holding",HoldingSchema);

export {HoldingsModel};