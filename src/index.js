import YuButton from './components/button';
import YuButtons from './components/buttons';
import YuInput from './components/input';
import YuOption from './components/option';
import YuRadio from './components/radio';
import YuRadios from './components/radios';
import YuSelect from './components/select';
import YuCounter from './components/counter';
import YuCheckbox from './components/checkbox';
import YuDialog from './components/dialog';
import YuToolTip from './components/tooltip';
import YuCard from './components/card';
import YuCarousel from './components/carousel';
import YuCollapseItem from './components/collapse-item';
import YuCollapse from './components/collapse';
import YuMenuItem from './components/menu-item';
import YuNavMenu from './components/navmenu';
import YuCheckboxs from './components/checkboxs';
import YuLoading from './components/loading';
import YuCounterSide from './components/counter-side';
import YuSelected from './components/selected';
import YuCascader from './components/cascader';
import YuSwitch from './components/switch';
import YuDropDown from './components/dropdown';
import YuDropdownMenu from './components/dropdown-menu';
import YuDropdownItem from './components/dropdown-item';
import YuBreadcrumb from './components/breadcrumb';
import YuBreadcrumbItem from './components/breadcrumb-item';
import YuSlider from './components/slider';
import YuTimePicker from './components/time-picker';
import YuScrollSelect from './components/scroll-select';
import YuDatePicker from './components/date-picker';
import YuUpload from './components/upload';
import YuRate from './components/rate';
import YuForm from './components/form';
import YuField from './components/field';

// 在Vue全局安装一些快捷方法
function install(Vue, opts = {}) {
  // Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '1.0.1',
  install,
  YuToolTip,
  YuDialog,
  YuButton,
  YuButtons,
  YuInput,
  YuOption,
  YuRadio,
  YuRadios,
  YuSelect,
  YuCounter,
  YuCheckbox,
  YuCard,
  YuCarousel,
  YuCollapseItem,
  YuCollapse,
  YuMenuItem,
  YuNavMenu,
  YuCheckboxs,
  YuLoading,
  YuCounterSide,
  YuSelected,
  YuCascader,
  YuSwitch,
  YuDropDown,
  YuDropdownMenu,
  YuDropdownItem,
  YuBreadcrumb,
  YuBreadcrumbItem,
  YuSlider,
  YuTimePicker,
  YuScrollSelect,
  YuDatePicker,
  YuUpload,
  YuRate,
  YuForm,
  YuField,
};

module.exports.default = module.exports;
