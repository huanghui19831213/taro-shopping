
import pic1 from "@static/image/pic1.jpg";
import pic2 from "@static/image/pic2.jpg";
import pic4 from "@static/image/pic4.webp";
import pic5 from "@static/image/pic5.webp";
import pic6 from "@static/image/pic6.webp";
import classNames from "classnames";
import {
  View,
  Swiper,
  SwiperItem,
  Image,
  Text,
  Button,
} from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./index.scss";
import Guige from "./guige/guige";

class productDetail extends Component<any, any> {
  constructor() {
    super(...arguments);
    this.state = {
      isShow: false,
    };
  }
  config = {
    navigationBarTitleText: "商品详细",
  }
  changeGuige() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  handlerClickGuige(e){
    console.log(e)
    this.setState({
      isShow:e
    })
  }
  render() {
    return (
      <View className='productDetail'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          autoplay
          indicatorDots
        >
          <SwiperItem>
            <View className='demo-text-1'>
              <Image src={pic1} mode='widthFix'></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
            <Image src={pic2} mode='widthFix'></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src={pic4} mode='widthFix'></Image>
          </SwiperItem>
        </Swiper>
        <View className='priceDiv'>
          <Text className='left'>￥758 </Text>
          <View className='right'>
            <Text className='icon iconfont icon-fenxiang'></Text>分享
          </View>
        </View>
        <View className='title miaoshu'>
          <Text>
            实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜
          </Text>
        </View>
        <View className='miaoshu'>
          <View className='info'>
            <View>
              <Text className='label'>服务</Text>
              <Text className='data-info'>
                15天退货 · 1次破损补寄 · 订单险 · 运费险
                <Text className='icon iconfont icon-xiangyou'></Text>
              </Text>
            </View>
          </View>

          <View className='info'>
            <View>
              <Text className='label'>规格</Text>
              <Text className='data-info' onClick={this.changeGuige}>
                请选择颜色分类
                <Text className='icon iconfont icon-xiangyou'></Text>
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text className='label'>参数</Text>
              <Text className='data-info'>
                品牌 型号...
                <Text className='icon iconfont icon-xiangyou'></Text>
              </Text>
            </View>
          </View>
        </View>
        <Image src={pic5} mode='widthFix'></Image>
        <Image src={pic6} mode='widthFix'></Image>
        <View className='fixed'>
          <Button>立即购买</Button>
        </View>
        
        <View className={classNames('dialog', this.state.isShow  && 'dialog-visible')}>
          <Guige onGuige={this.handlerClickGuige.bind(this)}></Guige>
        </View>
      </View>
    );
  }
}
export default productDetail;
