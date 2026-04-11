# name: Server CI

# on:
#   push:
#     paths:
#       - "server/**"
#   pull_request:
#     paths:
#       - "server/**"

# jobs:
#   quality-check:
#     runs-on: ubuntu-latest

#     steps:
#       - uses: actions/checkout@v4

#       - name: Setup Node.js 22
#         uses: actions/setup-node@v4
#         with:
#           node-version: 22
#           cache: "npm"
#           cache-dependency-path: "server/package-lock.json"

#       - name: Install dependencies
#         run: npm ci
#         working-directory: ./server

#       - name: Generate Prisma Client
#         run: npx prisma generate
#         working-directory: ./server
#         env:
#           DATABASE_URL: ${{ secrets.DATABASE_URL }}
#           DIRECT_URL: ${{ secrets.DIRECT_URL }}

#       - name: Lint check
#         run: npm run lint
#         working-directory: ./server

#       - name: Run Tests
#         run: npm test
#         working-directory: ./server

#       - name: Build check
#         run: npm run build
#         working-directory: ./server
