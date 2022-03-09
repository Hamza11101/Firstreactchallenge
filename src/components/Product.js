import React,{Component} from 'react';
import styled from "styled-components";
class Product extends Component{
render(){
return( <Productframe>
<ProductImageWrapper>
    <ProductImage src={this.props.product.img}></ProductImage>
</ProductImageWrapper>
<ProductImageWrapper>
    <span>{this.props.product.name}</span>
    <span>{this.props.product.price}</span>
</ProductImageWrapper>

</Productframe>

)

}


}
const Productframe= styled.div`
border-radius:25px;
min-height:150px;
min-width:150px;
background-color:rgb(110,110,110,0.7);
margin:10px
display:felx;
flex-direction: column;`;
const ProductImage=styled.img`
width:100%;
height:100%;
border-radius:25px;`;
const ProductImageWrapper=styled.div`
margin-top:auto;
margin-bottom:5px;
display:flex;
flex-direction:column;
& >span{
    text-align: center;
}`;

export default Product;