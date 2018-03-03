// import * as React from 'react';

// function withHoverMenu (Menu) {
//   return class extends React.Component {
//     componentDidMount = () => {
//       this.updateMenu()
//     }
//     componentDidUpdate = () => {
//       this.updateMenu()
//     }
//     updateMenu = () => {
//       const { value } = this.props
//       const menu = this.menu
//       if (!menu) return

//       if (value.isBlurred || value.isEmpty) {
//         menu.removeAttribute('style')
//         return
//       }

//       const selection = window.getSelection()
//       const range = selection.getRangeAt(0)
//       const rect = range.getBoundingClientRect()
//       console.log(rect)
//       menu.style.opacity = 1
//       menu.style.top = `${rect.top + window.scrollY - menu.offsetHeight}px`
//       menu.style.left = `${rect.left + window.scrollX - menu.offsetWidth / 2 + rect.width / 2}px`
//     }
//     menuRef = (menu) => {
//       this.menu = menu
//     }
//     render () {
//       return <Menu className="slate-rte-balloon" menuRef={this.menuRef} {...this.props} />
//     }
//   }
// }

// export default withHoverMenu;