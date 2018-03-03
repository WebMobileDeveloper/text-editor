
// import * as React from 'react';
// import { Feedback } from '../types';
// // import * as React from 'react';
// import * as $ from 'jquery';
// interface Props {
//     keyNum: number;
//     value: Feedback;
//     onListClicked: ((title: string, fillIn: string) => void);
// }
// interface State {
//     fill_in: string;
// }

// class CategoryNode extends React.Component<Props, State> {
//     private fillInDiv: HTMLDivElement | null;
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             fill_in: '',
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(e: Event) {  // list click hander
//         let target = $(e.target);
//         if (target.hasClass('created-element' + this.props.keyNum)) {
//             if (this.fillInDiv !== null) {
//                 this.props.onListClicked(this.props.value.toInsert, this.fillInDiv.innerHTML);
//             }
//         }
//     }
//     handleChange = () => {
//         if (this.fillInDiv !== null) {
//             this.setState({ fill_in: this.fillInDiv.innerHTML });
//         }
//     }
//     componentDidMount() {
//         window.addEventListener('mousedown', this.handleClick, false);
//     }
//     render() {
//         let ClassStr = 'search-list-title created-element' + this.props.keyNum;
//         let idStr = 'domContent' + this.props.keyNum;
//         let dataBalloonStr = '{element} #' + idStr;
//         return (
//             <div className="search-result">
//                 <div className="search-list-body">
//                     <div>
//                         <p id="balloon1" className="opener box search-list-title" data-balloon={dataBalloonStr} data-position="up"
//                             data-addclose="true" data-bgcolor="#f0f0f0" data-bordercolor="#999" data-textcolor="#333"  >
//                             - {this.props.value.toString}
//                         </p>
//                         <div id={idStr} data-contentforballoon="true" >
//                             <div className="created-div">
//                                 <span className={ClassStr} >Attach</span>&emsp;&emsp;
//                                 <a href={this.props.value.toRef} target="_blank" >Refer</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="fill-in-fragment" contentEditable={true} data-text="Fill in your text here..." ref={(ref) => this.fillInDiv = ref} />
//                     {/* <p className="search-list-ref" >
//                             {this.props.value.toRef}
//                         </p>
//                         <p className="search-list-markup">
//                             {this.props.value.toInsert}
//                         </p> */}
//                 </div>
//             </div >
//         );
//     }
// }
// export default CategoryNode;