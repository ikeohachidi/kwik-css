# kwik-css

The minimal css classes needed to get started with most projects in my opinion.

Not supposed to be an alternative to Tailwind or Bootstrap but can be used when you just some utility classes and will most likely write most of your styles yourself.

### Installation
**NPM**
```shell
npm i kwik-css
```
**Usage**
```javascript
import 'kwik-css';
```

## Classes
**Colors**
```css
--gray-1: #dbdbdb;
--gray-2: #b8b8b8;
--blue-1: #5c7aea;
--blue-2: #14279b;
--green-1: #38a3a5;
--green-2: #80ed99;
--red-1: #ec255a;
--red-2: #f90716;
```

**Padding**
```css
.p-<number>
.pt-<number>
.pr-<number>
.pb-<number>
.pl-<number>
```
Ranges from 0 to 19 with values all in `px`

**Margin**
```css
.m-<number>
.my-auto
.mx-auto
.mt-auto
.mb-auto
.ml-auto
.mr-auto
.mt-<number>
.mr-<number>
.mb-<number>
.ml-<number>
```
Ranges from 0 to 19 with values all in `px`


**Display**
```css
.block
.inline-block

.flex

/* should be used with flex */
.column
.row

.grow /*flex-grow: 1*/
.center /* center items */
.wrap
.between /* justify-content: space-between */
.evenly /* justify-content: space-evenly */

/* align-items */
.items-start
.items-center
.items-end
```

**Positioning**
```css
.fixed
.absolute
.relative
.top-0
.left-0
.right-0
.bottom-0
```