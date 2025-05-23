import mongoose from 'mongoose';

const RepairSchema = new mongoose.Schema({
  vehicleId:  { type: mongoose.Types.ObjectId, ref: 'vehicles', required: true },
  repairedDate: { type: Date, required: true },
  billingPrice: { type: Number, required: true },
  isAccident: { type: Boolean, required: true },
  repairStationCode:  { type: String, required: true },
  repairStationLabel: { type: String, required: true },
  repairer: { type: String, required: true },
  repairCategories: { type: String, required: true },
  batteryVolatge: { type: Number, required: false, default: 0 },
  etcRepairParts: { type: String, required: false, default: "" },
  memo: { type: String, required: false },
}, { timestamps: true, versionKey: false });

const RepairModel = mongoose.models.repairs || mongoose.model('repairs', RepairSchema);

export default RepairModel;
