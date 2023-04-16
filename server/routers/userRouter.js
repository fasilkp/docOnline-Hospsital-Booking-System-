import express from 'express';
import { paymentOrder, verifyPayment } from '../controllers/paymentController.js';
import { checkTimeSlot, getAllDepartments, getAllDoctors, getAllHospitals, getDoctor, getHospital } from '../controllers/userController.js';

const router=express.Router();

router.get("/departments", getAllDepartments)
router.get("/hospitals", getAllHospitals)
router.get("/doctors", getAllDoctors)

router.get("/hospital/:id", getHospital)

router.get("/doctor/:id", getDoctor)

router.post("/payment", paymentOrder)
router.post("/payment/verify", verifyPayment)

router.post('/check-time', checkTimeSlot)



export default router