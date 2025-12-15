import { NextFunction, Request, Response } from 'express';
import { ZodType, z } from 'zod';

type ValidationTarget = 'body' | 'query' | 'params';

const validate = <T extends ZodType>(
  schema: T,
  target: ValidationTarget = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req[target]);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: parsed.error.issues[0]
      });
    }

    if (target === 'query') {
      (req as any).validatedQuery = parsed.data;
    } else {
      req[target] = parsed.data;
    }
    next();
  };
};

const validateRequestBody = (schema: ZodType) => {
  return validate(schema, 'body');
};

const validateRequestParams = (schema: ZodType) => {
  return validate(schema, 'params');
};

const validateRequestQuery = (schema: ZodType) => {
  return validate(schema, 'query');
};

export { validateRequestBody, validateRequestParams, validateRequestQuery };