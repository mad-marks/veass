module.exports = {
  extends: [
    "plugin:vue/recommended",
    //'plugin:vue/vue3-recommended'
  ],
  rules: {
    //  'vue/mustache-interpolation-spacing': [2, 'always'],
     'vue/max-attributes-per-line': ["warn", {
      "singleline": 3,
      "multiline": {
        "max": 3,
        "allowFirstLine": true
      }
    }],
     'vue/attributes-order': 0
  }
}
