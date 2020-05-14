import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import styles from './styles/index';
import entities from './entities';

class ROMFont extends LitElement {
  static get styles() {
    return [styles(this.name)];
  }

  static get properties() {
    return {
      text: { type: String },
      name: { type: String },
    };
  }

  get textToFont() {
    return this.text.split('').map((char) => {
      const printed_char = entities[char] ? unsafeHTML(entities[char]) : char;
      return html`<span class="c${char.charCodeAt(0)}">${printed_char}</span>`;
    });
  }

  render() {
    return html`
      ${this.textToFont}
      <slot></slot>
    `;
  }
}

export class ROMFont_3dfx8x14 extends ROMFont {}
export class ROMFont_3dfx8x16 extends ROMFont {}
export class ROMFont_3dfx8x8 extends ROMFont {}
export class ROMFont_50146chareuro_8x14in8x16 extends ROMFont {}
export class ROMFont_50146chareuro_8x8in8x16 extends ROMFont {}
export class ROMFont_ATIEgaWonder800p_8x14 extends ROMFont {}
export class ROMFont_ATIEgaWonder800p_8x16 extends ROMFont {}
export class ROMFont_ATIEgaWonder800p_8x8 extends ROMFont {}
export class ROMFont_ATIx550_8x16 extends ROMFont {}
export class ROMFont_ATIx550_8x8 extends ROMFont {}
export class ROMFont_AVGA2_8x14 extends ROMFont {}
export class ROMFont_AVGA2_8x16 extends ROMFont {}
export class ROMFont_AVGA2_8x8 extends ROMFont {}
export class ROMFont_BLADE3D_AGP_HIS__8x14 extends ROMFont {}
export class ROMFont_BLADE3D_AGP_HIS__8x16 extends ROMFont {}
export class ROMFont_BLADE3D_AGP_HIS__8x8 extends ROMFont {}
export class ROMFont_BLADE3D_AGP__8x14 extends ROMFont {}
export class ROMFont_BLADE3D_AGP__8x16 extends ROMFont {}
export class ROMFont_BLADE3D_AGP__8x8 extends ROMFont {}
export class ROMFont_BLADE3D_PCI__8x14 extends ROMFont {}
export class ROMFont_BLADE3D_PCI__8x16 extends ROMFont {}
export class ROMFont_BLADE3D_PCI__8x8 extends ROMFont {}
export class ROMFont_BLADEXP__8x14 extends ROMFont {}
export class ROMFont_BLADEXP__8x16 extends ROMFont {}
export class ROMFont_BLADEXP__8x8 extends ROMFont {}
export class ROMFont_CGA_PRAVETZ_01__8x8 extends ROMFont {}
export class ROMFont_CGA_PRAVETZ_02__8x8 extends ROMFont {}
export class ROMFont_CGA_PRAVETZ_03__8x8 extends ROMFont {}
export class ROMFont_CGA_PRAVETZ_04__8x8 extends ROMFont {}
export class ROMFont_CGA_PRAVETZ__8x8 extends ROMFont {}
export class ROMFont_CLGD5442_8x14 extends ROMFont {}
export class ROMFont_CLGD5442_8x16 extends ROMFont {}
export class ROMFont_CLGD5442_8x8 extends ROMFont {}
export class ROMFont_Connect3d_Infineon_8x16 extends ROMFont {}
export class ROMFont_Connect3d_Infineon_8x8 extends ROMFont {}
export class ROMFont_DiamonStealth64_8x14 extends ROMFont {}
export class ROMFont_DiamonStealth64_8x16 extends ROMFont {}
export class ROMFont_DiamonStealth64_8x8 extends ROMFont {}
export class ROMFont_ELSAVIC2_8x14 extends ROMFont {}
export class ROMFont_ElsaFireGLV3200_128_8x16 extends ROMFont {}
export class ROMFont_ElsaVIC2_8x16 extends ROMFont {}
export class ROMFont_ElsaVIC2_8x8 extends ROMFont {}
export class ROMFont_FujitsuSiemensX300M_8x16 extends ROMFont {}
export class ROMFont_FujitsuSiemensX300M_8x8 extends ROMFont {}
export class ROMFont_G400_8x16 extends ROMFont {}
export class ROMFont_G400_8x8 extends ROMFont {}
export class ROMFont_GENOA_8x14 extends ROMFont {}
export class ROMFont_GENOA_8x16 extends ROMFont {}
export class ROMFont_GENOA_8x8 extends ROMFont {}
export class ROMFont_IBM_AT_V1_V3 extends ROMFont {}
export class ROMFont_IBM_PC_BIOS_1981_04_24_HALF_8x8 extends ROMFont {}
export class ROMFont_IBM_PC_V1_8x8 extends ROMFont {}
export class ROMFont_IBM_PC_V2_8x8 extends ROMFont {}
export class ROMFont_IBM_PC_V3_8x8 extends ROMFont {}
export class ROMFont_IBM_VGA_8x14 extends ROMFont {}
export class ROMFont_IBM_VGA_8x16 extends ROMFont {}
export class ROMFont_IBM_VGA_8x8 extends ROMFont {}
export class ROMFont_IBM_XT286_V1_8x8 extends ROMFont {}
export class ROMFont_IBM_XT_V1_V3_8x8 extends ROMFont {}
export class ROMFont_M32_8x14 extends ROMFont {}
export class ROMFont_M32_8x16 extends ROMFont {}
export class ROMFont_M32_8x8 extends ROMFont {}
export class ROMFont_M64gx_8x14 extends ROMFont {}
export class ROMFont_M64gx_8x16 extends ROMFont {}
export class ROMFont_M64gx_8x8 extends ROMFont {}
export class ROMFont_MGAMIL2_8x16 extends ROMFont {}
export class ROMFont_MGAMIL2_8x8 extends ROMFont {}
export class ROMFont_MIROV968_8x14 extends ROMFont {}
export class ROMFont_MIROV968_8x16 extends ROMFont {}
export class ROMFont_MIROV968_8x8 extends ROMFont {}
export class ROMFont_MORSEKP800_8x14 extends ROMFont {}
export class ROMFont_MORSEKP800_8x16 extends ROMFont {}
export class ROMFont_MORSEKP800_8x8 extends ROMFont {}
export class ROMFont_NCR_GD5428_8x14 extends ROMFont {}
export class ROMFont_NCR_GD5428_8x16 extends ROMFont {}
export class ROMFont_NCR_GD5428_8x8 extends ROMFont {}
export class ROMFont_NSILogic_SmartEGAPlus_04_086_01Rev1__8x14 extends ROMFont {}
export class ROMFont_NSILogic_SmartEGAPlus_04_086_01Rev1__8x8 extends ROMFont {}
export class ROMFont_OakTechnolgy_unknown_1__8x14 extends ROMFont {}
export class ROMFont_OakTechnolgy_unknown_1__8x16 extends ROMFont {}
export class ROMFont_OakTechnolgy_unknown_1__8x8 extends ROMFont {}
export class ROMFont_OakTechnolgyVGA_KO77__8x14 extends ROMFont {}
export class ROMFont_OakTechnolgyVGA_KO77__8x16 extends ROMFont {}
export class ROMFont_OakTechnolgyVGA_KO77__8x8 extends ROMFont {}
export class ROMFont_QuadtelS3_86C801_86C805EnhancedVGABIOS_Version2__8x14 extends ROMFont {}
export class ROMFont_QuadtelS3_86C801_86C805EnhancedVGABIOS_Version2__8x16 extends ROMFont {}
export class ROMFont_QuadtelS3_86C801_86C805EnhancedVGABIOS_Version2__8x8 extends ROMFont {}
export class ROMFont_QuadtelVGABIOSVersion1__8x14 extends ROMFont {}
export class ROMFont_QuadtelVGABIOSVersion1__8x16 extends ROMFont {}
export class ROMFont_QuadtelVGABIOSVersion1__8x8 extends ROMFont {}
export class ROMFont_R128GL_8x16 extends ROMFont {}
export class ROMFont_R128GL_8x8 extends ROMFont {}
export class ROMFont_Riva128A_8x16 extends ROMFont {}
export class ROMFont_Riva128A_8x8 extends ROMFont {}
export class ROMFont_S3Trio64V_8x14 extends ROMFont {}
export class ROMFont_S3Trio64V_8x16 extends ROMFont {}
export class ROMFont_S3Trio64V_8x8 extends ROMFont {}
export class ROMFont_S3VIRGEGX2_8x14 extends ROMFont {}
export class ROMFont_S3VIRGEGX2_8x16 extends ROMFont {}
export class ROMFont_S3VirgeGX_8x8 extends ROMFont {}
export class ROMFont_SVGA141__8x14 extends ROMFont {}
export class ROMFont_SVGA141__8x16 extends ROMFont {}
export class ROMFont_SVGA141__8x8 extends ROMFont {}
export class ROMFont_Sapphire9600NP256_8x16 extends ROMFont {}
export class ROMFont_Sapphire9600NP256_8x8 extends ROMFont {}
export class ROMFont_Sapphire9600NPRO128_8x16 extends ROMFont {}
export class ROMFont_Sapphire9600NPRO128_8x8 extends ROMFont {}
export class ROMFont_TNT2M64_8x14 extends ROMFont {}
export class ROMFont_TNT2M64_8x16 extends ROMFont {}
export class ROMFont_TNT2M64_8x8 extends ROMFont {}
export class ROMFont_TSENG_ET3000AX_ISAVGA_8x14 extends ROMFont {}
export class ROMFont_TSENG_ET3000AX_ISAVGA_8x8 extends ROMFont {}
export class ROMFont_TSVGA_8x14 extends ROMFont {}
export class ROMFont_TSVGA_ET4000_8x16 extends ROMFont {}
export class ROMFont_TSVGA_ET4000_8x8 extends ROMFont {}
export class ROMFont_TsengLabsVGA_4000BIOSV1__8x14 extends ROMFont {}
export class ROMFont_TsengLabsVGA_4000BIOSV1__8x16 extends ROMFont {}
export class ROMFont_TsengLabsVGA_4000BIOSV1__8x8 extends ROMFont {}
export class ROMFont_Tseng_ET3000AX_ISA_VGA_VGA_ULTRA__8x16 extends ROMFont {}
export class ROMFont_V7MERC_8x14 extends ROMFont {}
export class ROMFont_V7MERC_8x16 extends ROMFont {}
export class ROMFont_V7MERC_8x8 extends ROMFont {}
export class ROMFont_V7_Vega_8x14 extends ROMFont {}
export class ROMFont_V7_Vega_8x16 extends ROMFont {}
export class ROMFont_V7_Vega_8x8 extends ROMFont {}
export class ROMFont_VANTAGE_8x14 extends ROMFont {}
export class ROMFont_VANTAGE__8x14 extends ROMFont {}
export class ROMFont_VANTAGE__8x16 extends ROMFont {}
export class ROMFont_VANTA_8x14 extends ROMFont {}
export class ROMFont_VANTA__8x8 extends ROMFont {}
export class ROMFont_VTech_LaserTurboXT_BIOS_V1__8x8 extends ROMFont {}
export class ROMFont_VTech_LaserXT3_BIOS_V1__8x8 extends ROMFont {}
export class ROMFont_Vanta_8x16 extends ROMFont {}
export class ROMFont_Vodoo3PCI_8x14 extends ROMFont {}
export class ROMFont_Voodoo3PCI_8x16 extends ROMFont {}
export class ROMFont_Voodoo3PCI_8x8 extends ROMFont {}
export class ROMFont_WIN1KXHR__8x16 extends ROMFont {}
export class ROMFont_WIN1KXHR__8x8 extends ROMFont {}
export class ROMFont_WONDER16__8x16 extends ROMFont {}
export class ROMFont_WONDER16__8x8 extends ROMFont {}
export class ROMFont_Winner1kxhr_8x14 extends ROMFont {}
export class ROMFont_Wonder16_8x14 extends ROMFont {}
export class ROMFont_XGA_8x14 extends ROMFont {}
export class ROMFont_XGA_8x16 extends ROMFont {}
export class ROMFont_XGA_8x8 extends ROMFont {}
export class ROMFont_acer500_II_cga_rom_01__8x8 extends ROMFont {}
export class ROMFont_acer500_II_cga_rom_02__8x8 extends ROMFont {}
export class ROMFont_acer500_II_cga_rom__8x8 extends ROMFont {}
export class ROMFont_ami_ega__8x14 extends ROMFont {}
export class ROMFont_ami_ega__8x8 extends ROMFont {}
export class ROMFont_ami386__8x8 extends ROMFont {}
export class ROMFont_ami_winbios8x8 extends ROMFont {}
export class ROMFont_amxtv132__8x8 extends ROMFont {}
export class ROMFont_ati_small_wonder_rev1_GR_ROM_01__8x8 extends ROMFont {}
export class ROMFont_ati_small_wonder_rev1_GR_ROM_02__8x8 extends ROMFont {}
export class ROMFont_ati_small_wonder_rev1_GR_ROM_03__8x8 extends ROMFont {}
export class ROMFont_ati_small_wonder_rev1_GR_ROM_04__8x8 extends ROMFont {}
export class ROMFont_ati_small_wonder_rev1_GR_ROM__8x8 extends ROMFont {}
export class ROMFont_award_2 extends ROMFont {}
export class ROMFont_bochslower127_8x8 extends ROMFont {}
export class ROMFont_dtk_erso_2__8x8 extends ROMFont {}
export class ROMFont_et3000ax_8x14 extends ROMFont {}
export class ROMFont_et4000_stb__8x16 extends ROMFont {}
export class ROMFont_et4000_stb__8x8 extends ROMFont {}
export class ROMFont_et4000_weirdlowerL_8x14 extends ROMFont {}
export class ROMFont_et4000_weirdlowerL_8x16 extends ROMFont {}
export class ROMFont_et4000_weirdlowerL_8x8 extends ROMFont {}
export class ROMFont_et4000w32isa_8x14 extends ROMFont {}
export class ROMFont_et4000w32isa_8x16 extends ROMFont {}
export class ROMFont_et4000w32isa_8x8 extends ROMFont {}
export class ROMFont_genoa_ega_2__8x14 extends ROMFont {}
export class ROMFont_genoa_ega_2__8x8 extends ROMFont {}
export class ROMFont_genxt__8x8 extends ROMFont {}
export class ROMFont_ibm_ega__8x14 extends ROMFont {}
export class ROMFont_ibm_ega__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_01__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_02__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_03__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_04__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_05__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_06__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_07__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_08__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_09__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr_10__8x8 extends ROMFont {}
export class ROMFont_ibm5155_cga_rom_memotek_gr__8x8 extends ROMFont {}
export class ROMFont_ibmjap_8x14 extends ROMFont {}
export class ROMFont_ibmjap_8x16 extends ROMFont {}
export class ROMFont_opt495sx__8x8 extends ROMFont {}
export class ROMFont_phoenix_2__8x8 extends ROMFont {}
export class ROMFont_s3_764__8x14 extends ROMFont {}
export class ROMFont_s3_764__8x16 extends ROMFont {}
export class ROMFont_s3_764__8x8 extends ROMFont {}
export class ROMFont_seabios8x14 extends ROMFont {}
export class ROMFont_seabios8x16 extends ROMFont {}
export class ROMFont_seabios8x8 extends ROMFont {}
export class ROMFont_tgui9400cxi__8x14 extends ROMFont {}
export class ROMFont_tgui9400cxi__8x16 extends ROMFont {}
export class ROMFont_tgui9400cxi__8x8 extends ROMFont {}
export class ROMFont_toshiba_t5200c_bios_vers_3__1__8x16 extends ROMFont {}
export class ROMFont_toshiba_t5200c_bios_vers_3__1__8x8 extends ROMFont {}
export class ROMFont_toshiba_t5200c_bios_vers_3__2__8x16 extends ROMFont {}
export class ROMFont_toshiba_t5200c_bios_vers_3__2__8x8 extends ROMFont {}
export class ROMFont_toshiba_t5200c_bios_vers_3__8x16 extends ROMFont {}
export class ROMFont_toshiba_t5200c_bios_vers_3__8x8 extends ROMFont {}
export class ROMFont_tvga_c4__8x14 extends ROMFont {}
export class ROMFont_tvga_c4__8x16 extends ROMFont {}
export class ROMFont_tvga_c4__8x8 extends ROMFont {}
export class ROMFont_tvga_d3__8x14 extends ROMFont {}
export class ROMFont_tvga_d3__8x16 extends ROMFont {}
export class ROMFont_tvga_d3__8x8 extends ROMFont {}
export class ROMFont_tvga8800cs_2__8x14 extends ROMFont {}
export class ROMFont_tvga8800cs_2__8x16 extends ROMFont {}
export class ROMFont_tvga8800cs_2__8x8 extends ROMFont {}
export class ROMFont_tvga8800cs__8x14 extends ROMFont {}
export class ROMFont_tvga8800cs__8x16 extends ROMFont {}
export class ROMFont_tvga8800cs__8x8 extends ROMFont {}
export class ROMFont_tvga9000a_d211__8x14 extends ROMFont {}
export class ROMFont_tvga9000a_d211__8x16 extends ROMFont {}
export class ROMFont_tvga9000a_d211__8x8 extends ROMFont {}
export class ROMFont_tvga9000a_d301__8x14 extends ROMFont {}
export class ROMFont_tvga9000a_d301__8x16 extends ROMFont {}
export class ROMFont_tvga9000a_d301__8x8 extends ROMFont {}
export class ROMFont_tvga9000a_japan__8x14 extends ROMFont {}
export class ROMFont_tvga9000a_japan__8x16 extends ROMFont {}
export class ROMFont_tvga9000a_japan__8x8 extends ROMFont {}
export class ROMFont_tvga9000i_2__8x14 extends ROMFont {}
export class ROMFont_tvga9000i_2__8x16 extends ROMFont {}
export class ROMFont_tvga9000i_2__8x8 extends ROMFont {}
export class ROMFont_vgaedge16__8x14 extends ROMFont {}
export class ROMFont_vgaedge16__8x16 extends ROMFont {}
export class ROMFont_vgaedge16__8x8 extends ROMFont {}
export class ROMFont_video_seven_vega_vga_62L1989V5_435_0016_47__8x14 extends ROMFont {}
export class ROMFont_video_seven_vega_vga_62L1989V5_435_0016_47__8x16 extends ROMFont {}
export class ROMFont_video_seven_vega_vga_62L1989V5_435_0016_47__8x8 extends ROMFont {}
export class ROMFont_wang_3050_BIOS_ROM__8x14 extends ROMFont {}
export class ROMFont_wang_3050_BIOS_ROM__8x16 extends ROMFont {}
export class ROMFont_wang_3050_BIOS_ROM__8x8 extends ROMFont {}
export class ROMFont_wd_pega__8x14 extends ROMFont {}
export class ROMFont_wd_pega__8x8 extends ROMFont {}
