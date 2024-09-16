import { Placeholders } from '../types';

export const reactComponent = ["import React, { Component } from 'react'"];
export const react = ["import React from 'react'"];
export const fragment = ["import { Fragment } from 'react'"];
export const reactPureComponent = [
  "import React, { PureComponent } from 'react'",
];
export const reactPropTypes = [
  "import React from 'react'",
  "import PropTypes from 'prop-types'",
];

export const reactWithReduxConnect = [
  "import React from 'react'",
  "import { connect } from 'react-redux'",
];

export const reduxHooks = [
  "import { useAppSelector, useAppDispatch } from 'redux/hooks';",
];

export const reactComponentWithReduxConnect = [
  "import React, { Component } from 'react'",
  "import { connect } from 'react-redux'",
];

export const reactWithMemo = ["import React, { memo } from 'react'"];

export const reduxComponentExport = [
  '',
  'const mapStateToProps = (state) => ({})',
  '',
  'const mapDispatchToProps = {}',
  '',
  `export default connect(mapStateToProps, mapDispatchToProps)(${Placeholders.FileName})`,
];

export const innerComponent = [
  '  return (',
  `    <div>${Placeholders.FirstTab}</div>`,
  '  )',
];
export const innerComponentFragment = [
  '  return (',
  `    <Fragment>${Placeholders.FirstTab}</Fragment>`,
  '  )',
];

export const innerComponentReturn = [
  '  render() {',
  '    return (',
  `      <div>${Placeholders.FirstTab}</div>`,
  '    )',
  '  }',
];

export const exportDefault = ['', `export default ${Placeholders.FileName}`];

export const propsInterface = [
  `export interface I${Placeholders.FileName}Props {
}`,
];

export const useSelector = ['const count = useAppSelector((state) => state)'];
export const useDispatch = ['const dispatch = useAppDispatch()'];
export const exportArrowWithProps = [
  `export const ${Placeholders.FileName} = (props: I${Placeholders.FileName}Props) => {`,
];

export const propsTypeInterface = [Placeholders.TypeProps, ''];
export const stateTypeInterface = [Placeholders.TypeState, ''];
export const propsStateInterface = [
  ...propsTypeInterface,
  ...stateTypeInterface,
];
