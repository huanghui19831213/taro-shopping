
import {
  View
} from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";

class oIndex extends Component<any, any> {
  constructor() {
    super(...arguments);
    this.state = {
    };
  }
  config = {
    navigationBarTitleText: "商品详细",
  }
  render() {
    return (
      <View className='productDetail'>
        111
      </View>
    );
  }
}
export default oIndex;
