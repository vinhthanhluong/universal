import DropdownMenuModule from './modules/DropdownMenuModule.js';
import FileActiveModule from './modules/FileActiveModule.js';
import ScrollTopModule from './modules/ScrollTopModule.js';
import HeaderFixedModule from './modules/HeaderFixedModule.js'
import LoadingModule from './modules/LoadingModule.js';
import QtyCartModule from './modules/QtyCartModule.js';
import CartBagModule from './modules/CartBagModule.js';
import SearchModule from './modules/SearchModule.js';
import MenuModule from './modules/MenuModule.js';
import AosModule from './modules/AosModule.js';
import GridModule from './modules/GridModule.js';
import PopupModule from './modules/PopupModule.js';
import DisableModule from './modules/DisableModule.js';
import LightGalleryModule from './modules/LightGalleryModule.js';
import SlideModule from './modules/SlideModule.js';
import TabModule from './modules/TabModule.js';
import CountUpModule from './modules/CountUpModule.js';
import FileModule from './modules/FileModule.js';
import CountDownModule from './modules/CountDownModule.js';


jQuery(document).ready(function ($) {
    ScrollTopModule();
    FileActiveModule();
    DropdownMenuModule();
    HeaderFixedModule();
    LoadingModule();
    QtyCartModule();
    CartBagModule();
    SearchModule();
    MenuModule();
    AosModule();
    GridModule();   
    PopupModule();
    DisableModule();
    LightGalleryModule();
    SlideModule();
    TabModule();
    CountUpModule();
    FileModule();
    CountDownModule();
});