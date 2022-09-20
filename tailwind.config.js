/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens:
    {
      'sm':  '640px',
  'md_two':  '767px',
      'md':  '895px',
  'lg_two': '1023px',
      'lg': '1151px',
      'xl': '1280px',
     '2xl': '1408px', 
     '3xl': '1535px',
    },
    extend: {
            fontFamily:
            {
              'Rode_Inter_font':'Inter',
            },  
            colors:
            {
              'gold':'#AD9970',
            },
          backgroundImage:
          {
            'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))', 
            'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))', 
            'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
            'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))', 
            'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))', 
            'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))', 
            'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
            'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))', 
            'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))', 
          },
        spacing:
        {
          '97':'26rem',
          '98':'28rem',
          '99':'30rem',
          '100':'32rem',
          '101':'34rem',
          '102':'36rem',
          '103':'38rem',
          '104':'40rem',
          '105':'43rem',
          '106':'46rem',
          '107':'49rem',
          '108':'52rem',
          '109':'55rem',
          '110':'58rem',
          '111':'61rem',
          '112':'64rem',
          '113':'67rem',
          '114':'70rem',
          '115':'73rem',
          '116':'76rem',
          '117':'79rem',
          '118':'82rem',
          '119':'85rem',
          '120':'88rem',
          '121':'91rem',
          '122':'94rem',
          '123':'97rem',
          '124':'100rem',
          '125':'103rem',
          '126':'106rem',
          '127':'107rem',
        },
    },
  },
  plugins: [],
}
