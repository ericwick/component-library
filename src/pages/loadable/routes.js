import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loading';
import Error from './error';
import Timeout from './timeout';

const LoadingComp = (props) => {
  if (props.error) {
    return <Error retry={props.retry} />;
  } else if (props.pastDelay) {
    return <Loading />;
  } else if (props.timedOut) {
    return <Timeout retry={props.retry} />;
  } else {
    return null;
  }
};

const page = (path) => {
  Loadable({
    loader: () => import(`../${path}`),
    loading: LoadingComp,
    delay: 300,
    timeout: 10000,
  });
};

export default (
  <Switch>
    <Route exact path="/" component={page('Main')} />
    <Route path="/accordion-docs" component={page('AccordionDocs')} />
    <Route path="/bento-docs" component={page('BentoDocs')} />
    <Route path="/breadcrumb-docs" component={page('BreadcrumbDocs')} />
    <Route path="/button-docs" component={page('ButtonDocs')} />
    <Route path="/card-docs" component={page('CardDocs')} />
    <Route path="/carousel-docs" component={page('CarouselDocs')} />
    <Route path="/comment-docs" component={page('CommentDocs')} />
    <Route path="/checkbox-docs" component={page('CheckboxDocs')} />
    <Route path="/dropdown-docs" component={page('DropdownDocs')} />
    <Route path="/feed-docs" component={page('FeedDocs')} />
    <Route path="/form-docs" component={page('FormDocs')} />
    <Route path="/menu-docs" component={page('MenuDocs')} />
    <Route path="/icon-docs" component={page('IconDocs')} />
    <Route path="/input-docs" component={page('InputDocs')} />
    <Route path="/loader-docs" component={page('LoaderDocs')} />
    <Route path="/modal-docs" component={page('ModalDocs')} />
    <Route path="/notification-docs" component={page('NotificationDocs')} />
    <Route path="/picker-docs" component={page('PickerDocs')} />
    <Route path="/radio-buttons-docs" component={page('RadioButtonsDocs')} />
    <Route path="/pagination-docs" component={page('PaginationDocs')} />
    <Route path="/progress-bar-docs" component={page('ProgressBarDocs')} />
    <Route path="/search-field-docs" component={page('SearchFieldDocs')} />
    <Route path="/slider-docs" component={page('SliderDocs')} />
    <Route path="/stepper-docs" component={page('StepperDocs')} />
    <Route path="/tabs-docs" component={page('TabsDocs')} />
    <Route path="/tab-bar-docs" component={page('TabBarDocs')} />
    <Route path="/tags-docs" component={page('TagsDocs')} />
    <Route path="/toggle-docs" component={page('ToggleDocs')} />
    <Route path="/tooltip-docs" component={page('TooltipDocs')} />
  </Switch>
);
