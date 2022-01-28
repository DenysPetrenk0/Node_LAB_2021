import { Request, Response } from "express";

function controllerWrapper(ctrl: any) {
  return async (req: Request, res: Response, next: any) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = controllerWrapper;
