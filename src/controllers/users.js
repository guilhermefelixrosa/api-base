import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()