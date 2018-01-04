module.exports = function override(config, env) {
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf instanceof Array) {
      return {
        ...rule,
        oneOf: [
          {
            test: /\.(graphql|gql)$/,
            loader: 'graphql-tag/loader',
            exclude: /node_modules/
          },
          ...rule.oneOf
        ]
      }
    }

    return rule
  })

  return config
}