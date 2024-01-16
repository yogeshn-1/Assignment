import styled from "styled-components";
const Span = styled.span`
  padding: 3px 5px;
  background-color: #192640;
`;
const Header = () => {
  return (
    <div className="header">
      <Span>
        <select>
          <option value="cs_CZ">Česky</option>
          <option value="ca_ES">Catalan</option>
          <option value="da_DK">Dansk</option>
          <option value="de_DE">Deutsch</option>
          <option value="en_US" selected>
            English
          </option>
          <option value="es_ES">Español</option>
          <option value="fr_FR">Français</option>
          <option value="hu_HU">Magyar</option>
          <option value="is_IS">íslenska</option>
          <option value="it_IT">Italiano</option>
          <option value="ja_JP">日本語</option>
          <option value="ko_KR">한국어</option>
          <option value="nl_NL">Nederlands</option>
          <option value="pl_PL">Polski</option>
          <option value="pt_BR">Português (BR)</option>
          <option value="ru_RU">Русский</option>
          <option value="zh_CN">简体中文</option>
          <option value="zh_TW">繁體中文</option>
        </select>
      </Span>
    </div>
  );
};

export default Header;
