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
import YuSteps from './components/steps';
import YuStep from './components/step';
import YuTabs from './components/tabs';
import YuTabsItem from './components/tabs-item';
import YuTabsNav from './components/tabs-nav';
import YuCarouselItem from './components/carousel-item';
import YuNotification from './components/notification';
import YuAlert from './components/alert';
import YuMessage from './components/message';
import YuMessageBox from './components/message-box';
import YuBadge from './components/badge';
import YuProgress from './components/progress';
import YuTag from './components/tag';
import YuTable from './components/table';
import YuPagination from './components/pagination';
import YuPopover from './components/popover';

// 在Vue全局安装一些快捷方法
function install(Vue, opts = {}) {
  // Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = '1.0.14';

const components = {
  version,
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
  YuSteps,
  YuStep,
  YuTabs,
  YuTabsItem,
  YuTabsNav,
  YuCarouselItem,
  YuNotification,
  YuAlert,
  YuMessage,
  YuMessageBox,
  YuBadge,
  YuProgress,
  YuTag,
  YuTable,
  YuPagination,
  YuPopover,
}

export default components;

export {
  version,
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
  YuSteps,
  YuStep,
  YuTabs,
  YuTabsItem,
  YuTabsNav,
  YuCarouselItem,
  YuNotification,
  YuAlert,
  YuMessage,
  YuMessageBox,
  YuBadge,
  YuProgress,
  YuTag,
  YuTable,
  YuPagination,
  YuPopover,
};
