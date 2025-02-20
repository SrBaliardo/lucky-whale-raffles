import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  background: 'linear-gradient(0deg, #35e9f4 0%, #6a64ac 90%)',
  backgroundColor: '#212528',
  loginLink: '#6a64ac',
  tabText: '#ffffff',
  tabUnderline: '#00ffff',
  tabNavBorder: '#384049',
  noticeboardBackground: '#282C30',
  noticeboardStroke: '#384049',
  noticeboardAdminItemBackground: '#282C30',
  noticeboardAdminItemText: '#aaa6ff',
  formNoticeAdminBackground: '#1e1e1e',
  formNoticeAdminBorder: '#6a64ac',
  formNoticeAdminText: '#6c7883',
  formNoticeAdminLabel: '#aaa6ff',
  formNoticeAdminDisabledInput: '#282C30',
  spanRequired: '#00ffff',
  deleteButtonText: '#ffffff',
  deleteButtonIcon: '#ffffff',
  editButtonIcon: '#6a64ac',
  fillButtonBackground: '#6a64ac',
  fillButtonText: '#ffffff',
  borderButton: '#6a64ac',
  borderButtonText: '#ffffff',
  dropdownBackground: '#282C30',
  dropdownText: '#6c7883',
  dropdownStroke: '#6a64ac',
  dropdownHover: '#212528',
  TableHeaderBackground: '#302f49',
  TableHeaderText: '#ffffff',
  TableHeaderStroke: '#6c7883',
  TableHeaderHoverBackground: '#1d1c2c',
  TableIconsColor: '#6a64ac',
  TableRowsXBackground: '#282C30',
  TableRowHoverBackground: '#1c1f22',
  TableRowsText: '#aaa6ff',
  TableRowsStroke: '#384049',
  paginationItemColor: '#6c7883',
  TableSorterArrowColor: '#6c7883',
  paginationActiveItemColor: '#aaa6ff',
  checkboxForm: '#00ffff',
  treeNodeHighLevel: '#6a64ac',
  treeNodeLowLevel: '#302f49',
  popTitle: '#aaa6ff',
  popText: '#E0E0E9',

  buttonPrimary: '#00e0aa',
  font: '#ffffff',
  paragraphPrimary: '#aaa6ff',
  labelPrimary: '#aaa6ff',
  iconPurple: '#6a64ac',
  iconGreen: '#00e0aa',
  iconRed: '#e33756',
  disabled: '#6c7883',
}

export const lightTheme = {
  background: 'linear-gradient(0deg, #a0e9ee 0%, #9693b7 100%)',
  backgroundColor: '#fcfcfc',
  loginLink: '#022b9a',
  tabText: '#6a64ac',
  tabUnderline: '#6a64ac',
  tabNavBorder: '#bababa',
  noticeboardBackground: '#E0E0E9',
  noticeboardStroke: '#bababa',
  noticeboardAdminItemBackground: '#EEEDF2',
  noticeboardAdminItemText: '#6c7883',
  formNoticeAdminBackground: '#f5f5f5',
  formNoticeAdminBorder: '#6a64ac',
  formNoticeAdminText: '#6c7883',
  formNoticeAdminLabel: '#6a64ac',
  formNoticeAdminDisabledInput: '#e5e5e5',
  spanRequired: '#e33756',
  deleteButtonText: '#e33756',
  deleteButtonIcon: '#e33756',
  editButtonIcon: '#6c7883',
  fillButtonBackground: '#9693b7',
  fillButtonText: '#ffffff',
  borderButton: '#9693b7',
  borderButtonText: '#9693b7',
  dropdownBackground: '#EEEDF2',
  dropdownText: '#6c7883',
  dropdownStroke: '#bababa',
  dropdownHover: '#E0E0E9',
  TableHeaderBackground: '#e0e0e9',
  TableHeaderText: '#6a64ac',
  TableHeaderStroke: '#6a64ac',
  TableHeaderHoverBackground: '#EEEDF2',
  TableIconsColor: '#6c7883',
  TableRowsXBackground: '#f5f5f5',
  TableRowHoverBackground: '#EEEDF2',
  TableRowsText: '#6c7883',
  TableRowsStroke: '#d3d3d3',
  paginationItemColor: '#6c7883',
  TableSorterArrowColor: '#6a64ac',
  paginationActiveItemColor: '#6a64ac',
  checkboxForm: '#6a64ac',
  treeNodeHighLevel: '#9693b7',
  treeNodeLowLevel: '#cdcad8',
  popTitle: '#6a64ac',
  popText: '#6a64ac',

  buttonPrimary: '#a0e9ee',
  font: '#6a64ac',
  paragraphPrimary: '#6a64ac',
  labelPrimary: '#6a64ac',
  iconPurple: '#6a64ac',
  iconGreen: '#00e0aa',
  disabled: '#6c7883',
  iconRed: '#e33756',
}

const ThemeStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.font};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
  }

  .background-content {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  .login-link {
    color: ${({ theme }) => theme.loginLink};
  }

  .login-input {
    color: ${({ theme }) => theme.formNoticeAdminText};
    border-color: ${({ theme }) => theme.formNoticeAdminBorder};
    background-color: ${({ theme }) => theme.formNoticeAdminBackground};
    border-radius: 10px;
  }

  .input {
    color: ${({ theme }) => theme.formNoticeAdminText};
    border: 1.5px solid ${({ theme }) => theme.formNoticeAdminBorder};
    background-color: ${({ theme }) => theme.formNoticeAdminBackground};
    border-radius: 10px;
    padding-left: 10px;
  }

  .tab-text {
    color: ${({ theme }) => theme.tabText};
  }

  .tab-underline {
    background-color: ${({ theme }) => theme.tabUnderline};
  }

  .tab-nav-border {
    border-color: ${({ theme }) => theme.tabNavBorder};
  }

  .noticeboard-background {
    background-color: ${({ theme }) => theme.noticeboardBackground};
  }

  .noticeboard-stroke {
    border-color: ${({ theme }) => theme.noticeboardStroke};
  }

  .notice-item-admin {
    background-color: ${({ theme }) => theme.noticeboardAdminItemBackground};
    color: ${({ theme }) => theme.noticeboardAdminItemText};
  }

  .delete-button {
    color: ${({ theme }) => theme.deleteButtonText};
  }

  .edit-button {
    color: ${({ theme }) => theme.editButtonIcon};
  }

  .fill-button {
    background-color: ${({ theme }) => theme.fillButtonBackground};
    color: ${({ theme }) => theme.fillButtonText};

    span {
      color: ${({ theme }) => theme.fillButtonText};
    }
  }

  .border-button {
    border-color: ${({ theme }) => theme.borderButton};
    color: ${({ theme }) => theme.borderButtonText};
  }

  .form-notice-admin-input {
    color: ${({ theme }) => theme.formNoticeAdminText};
    border-color: ${({ theme }) => theme.formNoticeAdminBorder};
    background-color: ${({ theme }) => theme.formNoticeAdminBackground};
  }

  .form-notice-admin-label {
    color: ${({ theme }) => theme.formNoticeAdminLabel};
  }

  .form-notice-admin-disabled-input {
    background-color: ${({ theme }) => theme.formNoticeAdminDisabledInput};
    color: ${({ theme }) => theme.formNoticeAdminText};
  }

  .span-required {
    color: ${({ theme }) => theme.spanRequired};
  }

  .table-header-background {
    background-color: ${({ theme }) => theme.TableHeaderBackground};
  }

  .table-rows-background {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  .table-rows-x-background {
    background-color: ${({ theme }) => theme.TableRowsXBackground};
  }

  .selected-column {
    background-color: ${({ theme }) => theme.selectedColumnBackgroundColor};
  }

  .table-title {
    color: ${({ theme }) => theme.TableHeaderText};
  }

  .table-rows-text {
    color: ${({ theme }) => theme.TableRowsText};
  }

  .table-header-stroke {
    border-color: ${({ theme }) => theme.TableHeaderStroke};
  }

  .table-rows-stroke {
    border-color: ${({ theme }) => theme.TableRowsStroke};
  }

  .table-icons {
    color: ${({ theme }) => theme.TableIconsColor};
  }

  .table-sorter-arrow {
    color: ${({ theme }) => theme.TableSorterArrowColor};
  }

  .pagination-item {
    color: ${({ theme }) => theme.paginationItemColor};
  }

  .pagination-active-item {
    color: ${({ theme }) => theme.paginationActiveItemColor};
    border-color: ${({ theme }) => theme.paginationActiveItemColor};
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  .checkbox-form {
    background-color: ${({ theme }) => theme.checkboxForm};
  }

  .tree-node-high-background {
    background-color: ${({ theme }) => theme.treeNodeHighLevel};
  }

  .tree-node-low-background {
    background-color: ${({ theme }) => theme.treeNodeLowLevel};
  }

  .button-primary {
    background-color: ${({ theme }) => theme.buttonPrimary};
  }

  .paragraph-primary {
    color: ${({ theme }) => theme.paragraphPrimary};
  }

  .label-primary {
    color: ${({ theme }) => theme.labelPrimary};
  }

  .icon-purple {
    color: ${({ theme }) => theme.iconPurple};
  }

  .icon-green {
    color: ${({ theme }) => theme.iconGreen};
  }

  .icon-red {
    color: ${({ theme }) => theme.iconRed};
  }

  button {
    font-family: 'Roboto';
    background-color: ${({ theme }) =>
      theme.buttonPrimary}; /* Default button style */
  }

  p {
    color: ${({ theme }) => theme.font}; /* Default button style */
  }
`

export default ThemeStyles
