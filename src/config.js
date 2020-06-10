
const dev = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-dev-attachmentsbucket-qz6sv5j6soyu"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://vw8qz4uln9.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_dykzXMuUx",
      APP_CLIENT_ID: "7uamkpbsr9jb4e5t2rndi46og0",
      IDENTITY_POOL_ID: "us-east-1:070cec7b-d6a0-40f1-9402-6006bbdbb66e"
    },
    STRIPE_KEY: "pk_test_51GrSKGItKUJG28OKDgIywXHTwl6JmqHQe8QefudlJO3Ug2RsWOHrNpyZjXfqXCKP7X6LYRGhYFdel6D7t28Z3HfM00pYT1esfl",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-attachmentsbucket-6t6urjqu3y7k"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pnc6918g1f.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_aIYnYTRYj",
    APP_CLIENT_ID: "7n8ojk2qv5l9opds484mcvmb6",
    IDENTITY_POOL_ID: "us-east-1:286fb39f-f69a-4746-aa2b-dbdf5db89b01"
  },
  STRIPE_KEY: "pk_test_51GrSKGItKUJG28OKDgIywXHTwl6JmqHQe8QefudlJO3Ug2RsWOHrNpyZjXfqXCKP7X6LYRGhYFdel6D7t28Z3HfM00pYT1esfl",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};