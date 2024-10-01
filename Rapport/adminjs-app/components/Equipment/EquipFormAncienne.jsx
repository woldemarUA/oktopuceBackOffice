import React, { useEffect } from 'react';
import {
  Box,
  Button,
  DrawerContent,
  DrawerFooter,
  Icon,
} from '@adminjs/design-system';
import { pick } from 'lodash';
import {
  useRecord,
  useQueryParams,
  BasePropertyComponent,
  LayoutElementRenderer,
  useTranslation,
} from 'adminjs';
import { useNavigate } from 'react-router-dom';

export const getDataCss = (...args) => args.join('-');

export const getResourceElementCss = (resourceId, suffix) =>
  getDataCss(resourceId, suffix);

export const getActionElementCss = (resourceId, actionName, suffix) =>
  getDataCss(resourceId, actionName, suffix);

const EquipmentForm = (props) => {
  const { record: initialRecord, resource, action } = props;
  const { record, handleChange, submit, loading, setRecord } = useRecord(
    initialRecord,
    resource.id
  );
  const { parsedQuery, redirectUrl } = useQueryParams();
  const navigate = useNavigate();

  const { translateButton } = useTranslation();

  useEffect(() => {
    if (initialRecord) {
      setRecord(initialRecord);
    }
  }, [initialRecord, parsedQuery]);
  useEffect(() => {
    if (parsedQuery) {
      const resourceProperties = pick(
        parsedQuery,
        Object.keys(resource.properties)
      );
      if (Object.keys(resourceProperties).length) {
        setRecord({
          ...record,
          params: { ...record.params, ...resourceProperties },
        });
      }
    }
  }, [parsedQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget) return false;
    submit().then((response) => {
      if (response.data.redirectUrl) {
        navigate(appendForceRefresh(response.data.redirectUrl));
      }
      // if record has id === has been created
      if (
        response.data.record.id &&
        !Object.keys(response.data.record.errors).length
      ) {
        handleChange({ params: {}, populated: {}, errors: {} });
      }
    });
    return false;
  };

  const handleCancel = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  const contentTag = getActionElementCss(
    resource.id,
    action.name,
    'drawer-content'
  );
  const formTag = getActionElementCss(resource.id, action.name, 'form');
  const footerTag = getActionElementCss(
    resource.id,
    action.name,
    'drawer-footer'
  );
  const buttonTag = getActionElementCss(
    resource.id,
    action.name,
    'drawer-submit'
  );
  const cancelButtonTag = getActionElementCss(
    resource.id,
    action.name,
    'drawer-cancel'
  );

  return (
    <Box
      as='form'
      flex
      flexGrow={1}
      onSubmit={handleSubmit}
      flexDirection='column'
      data-css={formTag}>
      <DrawerContent data-css={contentTag}>
        {action?.showInDrawer ? <ActionHeader {...props} /> : null}
        {action.layout
          ? action.layout.map((layoutElement, i) => (
              <LayoutElementRenderer
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                layoutElement={layoutElement}
                {...props}
                where='edit'
                onChange={handleChange}
                record={record}
              />
            ))
          : resource.editProperties.map((property) => (
              <BasePropertyComponent
                key={property.propertyPath}
                where='edit'
                onChange={handleChange}
                property={property}
                resource={resource}
                record={record}
              />
            ))}
      </DrawerContent>
      <DrawerFooter data-css={footerTag}>
        <Box
          flex
          style={{ gap: 16 }}>
          {redirectUrl && (
            <Button
              variant='light'
              type='button'
              onClick={handleCancel}
              data-css={cancelButtonTag}
              data-testid='button-cancel'>
              {translateButton('cancel', resource.id)}
            </Button>
          )}
          <Button
            variant='contained'
            type='submit'
            data-css={buttonTag}
            data-testid='button-save'
            disabled={loading}>
            {loading ? (
              <Icon
                icon='Loader'
                spin
              />
            ) : null}
            {translateButton('save', resource.id)}
          </Button>
        </Box>
      </DrawerFooter>
    </Box>
  );
};

export default EquipmentForm;
