module.exports = {    
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    productionSourceMap: false,

    css: {
      loaderOptions: {
        sass: {
          /** Set "$width" and "$height" from "clm.config" and include global variables and mixins to all styles. **/
          prependData: `        
            @import "@/style/.variables.scss";
            @import "@/style/.mixins.scss";`,
        },
      },
    },

    chainWebpack: config => {
      /** Replace SVG loader **/
      const svgRule = config.module.rule('svg');

      svgRule.uses.clear();

      svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
    },
  };
