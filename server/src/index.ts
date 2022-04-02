import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const app = express();
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());

  await prisma.users.create({
    data: {
      email: "test@test.com",
      password: "password",
      name: "test",
    },
  });

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.get("/", (_req, res) => {
    res.send(JSON.stringify("Hello world!"));
  });

  app.get("/user/:id", async (req, res) => {
    const user = await prisma.users.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.send(JSON.stringify(user));
  });

  app.post("/user/create", async (req, res) => {
    console.log("REQ BODY", req.body);
    const user = await prisma.users.create({
      data: {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      },
    });
    console.log("USER", user);
    res.send(JSON.stringify(user));
  });

  app.post("/user/update/:id", async (req, _res) => {
    await prisma.users.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        ...req.body,
      },
    });
  });

  app.get("/goals/:userId", async (req, res) => {
    const goals = await prisma.goals.findMany({
      where: {
        user_id: parseInt(req.params.userId),
      },
    });
    res.send(JSON.stringify(goals));
  });

  app.post("/goals/create", async (req, res) => {
    const goal = await prisma.goals.create({
      data: {
        ...req.body,
      },
    });
    res.send(JSON.stringify(goal));
  });

  app.post("/goals/update/:id", async (req, _res) => {
    await prisma.goals.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        ...req.body,
      },
    });
  });

  const port = 8080;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    console.log("DISCONNECTING PRISMA");
    await prisma.$disconnect();
  });
