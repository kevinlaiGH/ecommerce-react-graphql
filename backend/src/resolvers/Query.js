// const Query = {
//   // dogs(parent, args, ctx, info) {
//   //   global.dogs = global.dogs || [];
//   //   return global.dogs;
//   // }

//   async item(parents, args, ctx, info) {
//     const items = await ctx.db.query.items();
//     return items;
//   }
// };

// module.exports = Query;

const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items!!');
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
