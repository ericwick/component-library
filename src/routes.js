import React from "react";
import { Switch, Route } from "react-router-dom";

import AccordionDoc from "./components/pages/AccordionDocs";
import Bento from "./components/pages/Bento";
import Breadcrumb from "./components/pages/Breadcrumb";
import Button from "./components/pages/Button";
import Card from "./components/pages/Card";
import Carousel from "./components/pages/Carousel";
import Checkbox from "./components/pages/Checkbox";
import Comment from "./components/pages/Comment";
import Dropdown from "./components/pages/Dropdown";
import Feed from "./components/pages/Feed";
import Form from "./components/pages/Form";
import Menu from "./components/pages/Menu";
import Icon from "./components/pages/Icon";
import Input from "./components/pages/Input";
import Loader from "./components/pages/Loader";
import Main from "./components/pages/Main";
import Modal from "./components/pages/Modal";
import Notification from "./components/pages/Notification";
import Picker from "./components/pages/Picker";
import RadioButtons from "./components/pages/RadioButtons";
import Pagination from "./components/pages/Pagination";
import ProgressBar from "./components/pages/ProgressBar";
import SearchField from "./components/pages/SearchField";
import Slider from "./components/pages/Slider";
import Stepper from "./components/pages/Stepper";
import Tabs from "./components/pages/Tabs";
import TabBar from "./components/pages/TabBar";
import Tags from "./components/pages/Tags";
import Toggle from "./components/pages/Toggle";
import Tooltip from "./components/pages/Tooltip";

const routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/accordion-docs" component={AccordionDoc} />
        <Route path="/bento" component={Bento} />
        <Route path="/breadcrumb" component={Breadcrumb} />
        <Route path="/button" component={Button} />
        <Route path="/card" component={Card} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/comment" component={Comment} />
        <Route path="/checkbox" component={Checkbox} />
        <Route path="/dropdown" component={Dropdown} />
        <Route path="/feed" component={Feed} />
        <Route path="/form" component={Form} />
        <Route path="/menu" component={Menu} />
        <Route path="/icon" component={Icon} />
        <Route path="/input" component={Input} />
        <Route path="/loader" component={Loader} />
        <Route path="/modal" component={Modal} />
        <Route path="/notification" component={Notification} />
        <Route path="/picker" component={Picker} />
        <Route path="/radio-buttons" component={RadioButtons} />
        <Route path="/pagination" component={Pagination} />
        <Route path="/progress-bar" component={ProgressBar} />
        <Route path="/search-field" component={SearchField} />
        <Route path="/slider" component={Slider} />
        <Route path="/stepper" component={Stepper} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/tab-bar" component={TabBar} />
        <Route path="/tags" component={Tags} />
        <Route path="/toggle" component={Toggle} />
        <Route path="/tooltip" component={Tooltip} />
    </Switch>
);

export default routes;
