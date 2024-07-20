export const jwtConstants = {
  secret: () => {
    return process.env.JWT_SECRET || 'secret';
  },
};
