import React from 'react';
import { Tooltip, Icon } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './ThemeColor.less';

const Tag = ({ color, check, ...rest }) => (
  <div
    {...rest}
    style={{
      backgroundColor: color,
    }}
  >
    {check ? <Icon type="check" /> : ''}
  </div>
);

const ThemeColor = ({ colors, title, value, onChange }) => {
  let colorList = colors;
  if (!colors) {
    colorList = [
      {
        key: 'NADESHIKO',
        color: '#DC9FB4', // rgb(220,158,180)
      },
      {
        key: 'KOHBAI',
        color: '#E16B8C', // rgb(225,107,140)
      },
      {
        key: 'SUOH',
        color: '#8E354A', // rgb(142,53,74)
      },
      {
        key: 'TAIKOH',
        color: '#F8C3CD', // rgb(248,195,205)
      },
      {
        key: 'IKKONZOME',
        color: 'rgb(244,167,185)', // #F4A7B9
      },
      {
        key: 'KUWAZOME',
        color: 'rgb(100,54,60)', // #64363C
      },
      {
        key: 'MOMO',
        color: 'rgb(245,150,170)', // #F596AA
      },
      {
        key: 'ICHIGO',
        color: 'rgb(181,73,91)', // #B5495B
      },
      {
        key: 'USUBENI',
        color: 'rgb(232,122,144)', // #E87A90
      },
      {
        key: 'IMAYOH',
        color: 'rgb(208,90,110)', // #D05A6E
      },
      {
        key: 'NAKABENI',
        color: 'rgb(219,77,109)', // #DB4D6D
      },
      {
        key: 'SAKURA',
        color: 'rgb(254,223,225)', // #FEDFE1
      },
      {
        key: 'UMENEZUMI',
        color: 'rgb(158,122,122)', // #9E7A7A
      },
      {
        key: 'KARAKURENAI',
        color: 'rgb(208,16,76)', // #D0104C
      },
      {
        key: 'ENJI',
        color: 'rgb(159,53,58)', // #9F353A
      },
      {
        key: 'KURENAI',
        color: 'rgb(203,27,69)', // #CB1B45
      },
      {
        key: 'TOKI',
        color: 'rgb(238,169,168)', // #EEA9A9
      },
      {
        key: 'CYOHSYUN',
        color: 'rgb(191,103,102)', // #BF6766
      },
      {
        key: 'KOKIAKE',
        color: 'rgb(134,71,63)', // #86473F
      },
      {
        key: 'SAKURANEZUMI',
        color: 'rgb(177,150,147)', // #B19693
      },
      {
        key: 'JINZAMOMI',
        color: 'rgb(235,122,119)', // #EB7A77
      },
      {
        key: 'AZUKI',
        color: 'rgb(149,74,69)', // #954A45
      },
      {
        key: 'SUOHKOH',
        color: 'rgb(169,99,96)', // #A96360
      },
      {
        key: 'AKABENI',
        color: 'rgb(203,64,66)', // #CB4042
      },
      {
        key: 'SHINSYU',
        color: 'rgb(171,59,58)', // #AB3B3A
      },
      {
        key: 'HAIZAKURA',
        color: 'rgb(215,196,187)', // #D7C4BB
      },
      {
        key: 'KURIUME',
        color: 'rgb(144,72,64)', // #904840
      },
      {
        key: 'EBICHA',
        color: 'rgb(115,67,56)', // #734338
      },
      {
        key: 'GINSYU',
        color: 'rgb(199,62,58)', // #C73E3A
      },
      {
        key: 'KUROTOBI',
        color: 'rgb(85,66,54)', // #554236
      },
      {
        key: 'BENITOBI',
        color: 'rgb(153,70,57)', // #994639
      },
      {
        key: 'AKEBONO',
        color: 'rgb(241,148,131)', // #F19483
      },
      {
        key: 'BENIKABA',
        color: 'rgb(181,68,52)', // #B54434
      },
      {
        key: 'MIZUGAKI',
        color: 'rgb(185,136,125)', // #B9887D
      },
      {
        key: 'SANGOSYU',
        color: 'rgb(241,124,103)', // #F17C67
      },
      {
        key: 'BENIHIWADA',
        color: 'rgb(136,76,58)', // #884C3A
      },
      {
        key: 'SYOJYOHI',
        color: 'rgb(232,48,21)', // #E83015
      },
      {
        key: 'ENTAN',
        color: 'rgb(215,84,85)', // #D75455
      },
      {
        key: 'SHIKANCHA',
        color: 'rgb(181,93,76)', // #B55D4C
      },
      {
        key: 'HIWADA',
        color: 'rgb(133,72,54)', // #854836
      },
      {
        key: 'KAKISHIBU',
        color: 'rgb(163,94,71)', // #A35E47
      },
      {
        key: 'AKE',
        color: 'rgb(204,84,58)', // #CC543A
      },
      {
        key: 'TOBI',
        color: 'rgb(114,72,50)', // #724832
      },
      {
        key: 'BENIHI',
        color: 'rgb(247,92,47)', // #F75C2F
      },
      {
        key: 'KURIKAWACHA',
        color: 'rgb(106,64,40)', // #6A4028
      },
      {
        key: 'BENGARA',
        color: 'rgb(154,80,52)', // #9A5034
      },
      {
        key: 'TERIGAKI',
        color: 'rgb(196,98,67)', // #C46243
      },
      {
        key: 'EDOCHA',
        color: 'rgb(175,95,60)', // #AF5F3C
      },
      {
        key: 'ARAISYU',
        color: 'rgb(251,150,110)', // #FB966E
      },

      {
        key: 'MOMOSHIOCHA',
        color: '#724938', //
      },
      {
        key: 'KARACHA',
        color: '#B47157', //
      },
      {
        key: 'TOKIGARACHA',
        color: '#DB8E71', //
      },
      {
        key: 'OHNI',
        color: '#F05E1C', //
      },
      {
        key: 'SOHI',
        color: '#ED784A', //
      },
      {
        key: 'ENSYUCHA',
        color: '#CA7853', //
      },
      {
        key: 'KABACHA',
        color: '#B35C37', //
      },
      {
        key: 'KOGECHA',
        color: '#563F2E', //
      },
      {
        key: 'AKAKOH',
        color: '#E3916E', //
      },
      {
        key: 'SUZUMECHA',
        color: '#8F5A3C', //
      },
      {
        key: 'SHISHI',
        color: '#F0A986', //
      },
      {
        key: 'SODENKARACHA',
        color: '#A0674B', //
      },
      {
        key: 'KABA',
        color: '#C1693C', //
      },
      {
        key: 'KOKIKUCHINASHI',
        color: '#FB9966', //
      },
      {
        key: 'KURUMI',
        color: '#947A6D', //
      },
      {
        key: 'TAISYA',
        color: '#A36336', //
      },
      {
        key: 'ARAIGAKI',
        color: '#E79460', //
      },
      {
        key: 'KOHROZEN',
        color: '#7D532C', //
      },
      {
        key: 'AKAKUCHIBA',
        color: '#C78550', //
      },
      {
        key: 'TONOCHA',
        color: '#985F2A', //
      },
      {
        key: 'AKASHIROTSURUBAMI',
        color: '#E1A679', //
      },
      {
        key: 'SENCHA',
        color: '#855B32', //
      },
      {
        key: 'KANZO',
        color: '#FC9F4D', //
      },
      {
        key: 'SHAREGAKI',
        color: '#FFBA84', //
      },
      {
        key: 'BENIUKON',
        color: '#E98B2A', //
      },
      {
        key: 'UMEZOME',
        color: '#E9A368', //
      },
      {
        key: 'BIWACHA',
        color: '#B17844', //
      },
      {
        key: 'CHOJICHA',
        color: '#96632E', //
      },
      {
        key: 'KENPOHZOME',
        color: '#43341B', //
      },
      {
        key: 'KOHAKU',
        color: '#CA7A2C', //
      },
      {
        key: 'USUGAKI',
        color: '#ECB88A', //
      },
      {
        key: 'KYARA',
        color: '#78552B', //
      },
      {
        key: 'CHOJIZOME',
        color: '#B07736', //
      },
      {
        key: 'FUSHIZOME',
        color: '#967249', //
      },
      {
        key: 'KUCHIBA',
        color: '#E2943B', //
      },
      {
        key: 'KINCHA',
        color: '#C7802D', //
      },
      {
        key: 'KITSUNE',
        color: '#9B6E23', //
      },
      {
        key: 'SUSUTAKE',
        color: '#6E552F', //
      },
      {
        key: 'USUKOH',
        color: '#EBB471', //
      },
      {
        key: 'TONOKO',
        color: '#D7B98E', //
      },
      {
        key: 'GINSUSUTAKE',
        color: '#82663A', //
      },
      {
        key: 'OHDO',
        color: '#B68E55', //
      },
      {
        key: 'SHIRACHA',
        color: '#BC9F77', //
      },
      {
        key: 'KOBICHA',
        color: '#876633', //
      },
      {
        key: 'KIGARACHA',
        color: '#C18A26', //
      },
      {
        key: 'YAMABUKI',
        color: '#FFB11B', //
      },
      {
        key: 'YAMABUKICHA',
        color: '#D19826', //
      },
      {
        key: 'HAJIZOME',
        color: '#DDA52D', //
      },
      {
        key: 'KUWACHA',
        color: '#C99833', //
      },
      {
        key: 'TAMAGO',
        color: '#F9BF45', //
      },
      {
        key: 'SHIROTSURUBAMI',
        color: '#DCB879', //
      },
      {
        key: 'KITSURUBAMI',
        color: '#BA9132', //
      },
      {
        key: 'TAMAMOROKOSHI',
        color: '#E8B647', //
      },
      {
        key: 'HANABA',
        color: '#F7C242', //
      },
      {
        key: 'NAMAKABE',
        color: '#7D6C46', //
      },
      {
        key: 'TORINOKO',
        color: '#DAC9A6', //
      },
      {
        key: 'USUKI',
        color: '#FAD689', //
      },
      {
        key: 'KIKUCHIBA',
        color: '#D9AB42', //
      },
      {
        key: 'KUCHINASHI',
        color: '#F6C555', //
      },
      {
        key: 'TOHOH',
        color: '#FFC408', //
      },
      {
        key: 'UKON',
        color: '#EFBB24', //
      },
      {
        key: 'KARASHI',
        color: '#CAAD5F', //
      },
      {
        key: 'HIGOSUSUTAKE',
        color: '#8D742A', //
      },
      {
        key: 'RIKYUSHIRACHA',
        color: '#B4A582', //
      },
      {
        key: 'AKU',
        color: '#877F6C', //
      },
      {
        key: 'RIKYUCHA',
        color: '#897D55', //
      },
      {
        key: 'ROKOHCHA',
        color: '#74673E', //
      },
      {
        key: 'NATANEYU',
        color: '#A28C37', //
      },
      {
        key: 'UGUISUCHA',
        color: '#6C6024', //
      },
      {
        key: 'UGUISUCHA',
        color: '#6C6024', //
      },
      {
        key: 'KIMIRUCHA',
        color: '#867835', //
      },
      {
        key: 'KARIYASU',
        color: '#E9CD4C', //
      },
      {
        key: 'NANOHANA',
        color: '#F7D94C', //
      },
      {
        key: 'KIHADA',
        color: '#FBE251', //
      },
      {
        key: 'MUSHIKURI',
        color: '#D9CD90', //
      },
      {
        key: 'AOKUCHIBA',
        color: '#ADA142', //
      },
      {
        key: 'OMINAESHI',
        color: '#DDD23B', //
      },
      {
        key: 'HIWACHA',
        color: '#A5A051', //
      },
      {
        key: 'HIWA',
        color: '#BEC23F', //
      },
      {
        key: 'UGUISU',
        color: '#6C6A2D', //
      },
      {
        key: 'YANAGICHA',
        color: '#939650', //
      },
      {
        key: 'KOKE',
        color: '#838A2D', //
      },
      {
        key: 'KIKUJIN',
        color: '#B1B479', //
      },
      {
        key: 'RIKANCHA',
        color: '#616138', //
      },
      {
        key: 'AIKOBICHA',
        color: '#4B4E2A', //
      },
      {
        key: 'MIRU',
        color: '#5B622E', //
      },
      {
        key: 'SENSAICHA',
        color: '#4D5139', //
      },
      {
        key: 'BAIKOCHA',
        color: '#89916B', //
      },
      {
        key: 'HIWAMOEGI',
        color: '#90B44B', //
      },
      {
        key: 'YANAGIZOME',
        color: '#91AD70', //
      },
      {
        key: 'URAYANAGI',
        color: '#B5CAA0', //
      },
      {
        key: 'IWAICHA',
        color: '#646A58', //
      },
      {
        key: 'MOEGI',
        color: '#7BA23F', //
      },
      {
        key: 'NAE',
        color: '#86C166', //
      },
      {
        key: 'YANAGISUSUTAKE',
        color: '#4A593D', //
      },
      {
        key: 'MATSUBA',
        color: '#42602D', //
      },
      {
        key: 'AONI',
        color: '#516E41', //
      },
      {
        key: 'USUAO',
        color: '#91B493', //
      },
      {
        key: 'YANAGINEZUMI',
        color: '#808F7C', //
      },
      {
        key: 'TOKIWA',
        color: '#1B813E', //
      },
      {
        key: 'WAKATAKE',
        color: '#5DAC81', //
      },
      {
        key: 'CHITOSEMIDORI',
        color: '#36563C', //
      },
      {
        key: 'MIDORI',
        color: '#227D51', //
      },
      {
        key: 'BYAKUROKU',
        color: '#A8D8B9', //
      },
      {
        key: 'OITAKE',
        color: '#6A8372', //
      },
      {
        key: 'TOKUSA',
        color: '#2D6D4B', //
      },
      {
        key: 'ONANDOCHA',
        color: '#465D4C', //
      },
      {
        key: 'ROKUSYOH',
        color: '#24936E', //
      },
      {
        key: 'ABISEIJI',
        color: '#86A697', //
      },
      {
        key: 'AOTAKE',
        color: '#00896C', //
      },
      {
        key: 'VELUDO',
        color: '#096148', //
      },

      {
        key: 'MUSHIAO',
        color: '#20604F', //
      },
      {
        key: 'AIMIRUCHA',
        color: '#0F4C3A', //
      },
      {
        key: 'TONOCHA',
        color: '#4F726C', //
      },
      {
        key: 'AOMIDORI',
        color: '#00AA90', //
      },
      {
        key: 'SEIJI',
        color: '#69B0AC', //
      },
      {
        key: 'TETSU',
        color: '#26453D', //
      },
      {
        key: 'MIZUASAGI',
        color: '#66BAB7', //
      },
      {
        key: 'SEIHEKI',
        color: '#268785', //
      },
      {
        key: 'SABITETSUONANDO',
        color: '#405B55', //
      },
      {
        key: 'KORAINANDO',
        color: '#305A56', //
      },
      {
        key: 'BYAKUGUN',
        color: '#78C2C4', //
      },
      {
        key: 'OMESHICHA',
        color: '#376B6D', //
      },
      {
        key: 'KAMENOZOKI',
        color: '#A5DEE4', //
      },
      {
        key: 'FUKAGAWANEZUMI',
        color: '#77969A', //
      },
      {
        key: 'SABIASAGI',
        color: '#6699A1', //
      },
      {
        key: 'MIZU',
        color: '#81C7D4', //
      },
      {
        key: 'ASAGI',
        color: '#33A6B8', //
      },
      {
        key: 'ONANDO',
        color: '#0C4842', //
      },
      {
        key: 'AI',
        color: '#0D5661', //
      },
      {
        key: 'SHINBASHI',
        color: '#0089A7', //
      },
      {
        key: 'SABIONANDO',
        color: '#336774', //
      },
      {
        key: 'TETSUONANDO',
        color: '#255359', //
      },
      {
        key: 'HANAASAGI',
        color: '#1E88A8', //
      },
      {
        key: 'AINEZUMI',
        color: '#566C73', //
      },
      {
        key: 'MASUHANA',
        color: '#577C8A', //
      },
      {
        key: 'SORA',
        color: '#58B2DC', //
      },
      {
        key: 'NOSHIMEHANA',
        color: '#2B5F75', //
      },
      {
        key: 'CHIGUSA',
        color: '#3A8FB7', //
      },
      {
        key: 'OMESHIONANDO',
        color: '#2E5C6E', //
      },
      {
        key: 'HANADA',
        color: '#006284', //
      },
      {
        key: 'WASURENAGUSA',
        color: '#7DB9DE', //
      },
      {
        key: 'GUNJYO',
        color: '#51A8DD', //
      },
      {
        key: 'TSUYUKUSA',
        color: '#2EA9DF', //
      },
      {
        key: 'KUROTSURUBAMI',
        color: '#0B1013', //
      },
      {
        key: 'KON',
        color: '#0F2540', //
      },
      {
        key: 'KACHI',
        color: '#08192D', //
      },
      {
        key: 'RURI',
        color: '#005CAF', //
      },
      {
        key: 'RURIKON',
        color: '#0B346E', //
      },
      {
        key: 'BENIMIDORI',
        color: '#7B90D2', //
      },
      {
        key: 'FUJINEZUMI',
        color: '#6E75A4', //
      },
      {
        key: 'TETSUKON',
        color: '#261E47', //
      },
      {
        key: 'KONJYO',
        color: '#113285', //
      },
      {
        key: 'BENIKAKEHANA',
        color: '#4E4F97', //
      },
      {
        key: 'KONKIKYO',
        color: '#211E55', //
      },
      {
        key: 'FUJI',
        color: '#8B81C3', //
      },
      {
        key: 'FUTAAI',
        color: '#70649A', //
      },
      {
        key: 'OUCHI',
        color: '#9B90C2', //
      },
      {
        key: 'FUJIMURASAKI',
        color: '#8A6BBE', //
      },
      {
        key: 'FKIKYO',
        color: '#6A4C9C', //
      },
      {
        key: 'SHION',
        color: '#8F77B5', //
      },
      {
        key: 'MESSHI',
        color: '#533D5B', //
      },
      {
        key: 'USU',
        color: '#B28FCE', //
      },
      {
        key: 'HASHITA',
        color: '#986DB2', //
      },
      {
        key: 'EDOMURASAKI',
        color: '#77428D', //
      },
      {
        key: 'SHIKON',
        color: '#3C2F41', //
      },
      {
        key: 'KOKIMURASAKI',
        color: '#4A225D', //
      },
      {
        key: 'SUMIRE',
        color: '#66327C', //
      },
      {
        key: 'MURASAKI',
        color: '#592C63', //
      },
      {
        key: 'AYAME',
        color: '#6F3381', //
      },
      {
        key: 'FUJISUSUTAKE',
        color: '#574C57', //
      },
      {
        key: 'BENIFUJI',
        color: '#B481BB', //
      },
      {
        key: 'KUROBENI',
        color: '#3F2B36', //
      },
      {
        key: 'NASUKON',
        color: '#572A3F', //
      },
      {
        key: 'BUDOHNEZUMI',
        color: '#5E3D50', //
      },
      {
        key: 'HATOBANEZUMI',
        color: '#72636E', //
      },
      {
        key: 'KAKITSUBATA',
        color: '#622954', //
      },
      {
        key: 'EBIZOME',
        color: '#6D2E5B', //
      },
      {
        key: 'BOTAN',
        color: '#C1328E', //
      },
      {
        key: 'UMEMURASAKI',
        color: '#A8497A', //
      },
      {
        key: 'NISEMURASAKI',
        color: '#562E37', //
      },
      {
        key: 'TSUTSUJI',
        color: '#E03C8A', //
      },
      {
        key: 'MURASAKITOBI',
        color: '#60373E', //
      },
    ];
  }
  return (
    <div className={styles.themeColor}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {colorList.map(({ key, color }) => (
          <Tooltip key={color} title={formatMessage({ id: `app.setting.themecolor.${key}` })}>
            <Tag
              className={styles.colorBlock}
              color={color}
              check={value === color}
              onClick={() => onChange && onChange(color)}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ThemeColor;
