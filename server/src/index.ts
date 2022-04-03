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

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.get("/", (_req, res) => {
    res.send(JSON.stringify("Hello world!"));
  });

  // USER

  app.post("/user", async (req, res) => {
    const user = await prisma.users.findFirst({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.send(JSON.stringify(user));
  });

  app.post("/user/create", async (req, res) => {
    const user = await prisma.users.create({
      data: {
        ...req.body,
      },
    });
    res.send(JSON.stringify(user));
  });

  app.post("/user/update/:id", async (req, _res) => {
    await prisma.users.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });
  });

  // GOALS

  app.get("/goals/:userId", async (req, res) => {
    const goals = await prisma.goals.findMany({
      where: {
        user_id: req.params.userId,
      },
      orderBy: {
        created_at: "asc",
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
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });
  });

  // TODOS

  app.get("/todos/:userId", async (req, res) => {
    const todos = await prisma.todos.findMany({
      where: {
        user_id: req.params.userId,
      },
      orderBy: {
        created_at: "asc",
      },
    });
    res.send(JSON.stringify(todos));
  });

  app.post("/todos/create", async (req, res) => {
    const todo = await prisma.todos.create({
      data: {
        ...req.body,
      },
    });
    res.send(JSON.stringify(todo));
  });

  app.post("/todos/update/:id", async (req, _res) => {
    await prisma.todos.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });
  });

  app.post("/todos/delete/:id", async (req, _res) => {
    await prisma.todos.delete({
      where: {
        id: req.params.id,
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
    await prisma.$disconnect();
  });
