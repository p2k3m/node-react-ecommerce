import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AXT3CbwdIBtAc-iL6biDA8vWZUR_ZMpW01EKPtCJZiPoGedfugjz69L_PfLaf13nMbTFYNzP_WUb3raZ',
};
