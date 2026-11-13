package com.alhlhli.quranplayer;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.drawable.GradientDrawable;

public class ThemeManager {

    public static class Palette {
        public final String id;
        public final boolean isDark;
        public final int bgPrimary;
        public final int bgSecondary;
        public final int cardBg;
        public final int cardBorder;
        public final int textMain;
        public final int textSoft;
        public final int accent;
        public final int accentSoft;
        public final int highlightBg;
        public final int mushafPageBg;

        public Palette(String id, boolean isDark, int bgPrimary, int bgSecondary,
                       int cardBg, int cardBorder, int textMain, int textSoft,
                       int accent, int accentSoft, int highlightBg, int mushafPageBg) {
            this.id = id;
            this.isDark = isDark;
            this.bgPrimary = bgPrimary;
            this.bgSecondary = bgSecondary;
            this.cardBg = cardBg;
            this.cardBorder = cardBorder;
            this.textMain = textMain;
            this.textSoft = textSoft;
            this.accent = accent;
            this.accentSoft = accentSoft;
            this.highlightBg = highlightBg;
            this.mushafPageBg = mushafPageBg;
        }
    }

    public static Palette getPalette(String themeId) {
        if (themeId == null) themeId = "beige";
        switch (themeId) {
            case "default": // Light Purple
                return new Palette("default", false,
                    0xFFEEF2FF, 0xFFE0E7FF, 0xFFFFFFFF, 0xFFC7D2FE,
                    0xFF1E1B4B, 0xFF4338CA, 0xFF6366F1, 0xFFE0E7FF,
                    0x446366F1, 0xFFFAF9F5);
            case "dark": // Dark Purple
                return new Palette("dark", true,
                    0xFF0F1021, 0xFF171930, 0xFF1E213D, 0xFF313663,
                    0xFFF8FAFC, 0xFFA5B4FC, 0xFF818CF8, 0xFF282C52,
                    0x55818CF8, 0xFF181A30);
            case "emerald": // Light Emerald
                return new Palette("emerald", false,
                    0xFFECFDF5, 0xFFD1FAE5, 0xFFFFFFFF, 0xFFA7F3D0,
                    0xFF064E3B, 0xFF047857, 0xFF059669, 0xFFD1FAE5,
                    0x4410B981, 0xFFF9FBF8);
            case "emerald-dark": // Dark Emerald
                return new Palette("emerald-dark", true,
                    0xFF041610, 0xFF08261C, 0xFF0D3326, 0xFF1B5E47,
                    0xFFECFDF5, 0xFF6EE7B7, 0xFF10B981, 0xFF114232,
                    0x5510B981, 0xFF0A2118);
            case "gold": // Light Gold
                return new Palette("gold", false,
                    0xFFFFFBEB, 0xFFFEF3C7, 0xFFFFFFFF, 0xFFFDE68A,
                    0xFF451A03, 0xFF92400E, 0xFFD97706, 0xFFFEF3C7,
                    0x44F59E0B, 0xFFFFFDF7);
            case "gold-dark": // Dark Gold
                return new Palette("gold-dark", true,
                    0xFF18130A, 0xFF241C0E, 0xFF2E2412, 0xFF5C451E,
                    0xFFFEF3C7, 0xFFFBBF24, 0xFFF59E0B, 0xFF3D2F16,
                    0x55F59E0B, 0xFF211A0D);
            case "beige":
            default: // Calm Beige (Default)
                return new Palette("beige", false,
                    0xFFF3EAD8, 0xFFE9DEC7, 0xFFFAF4E8, 0xFFD7C7AA,
                    0xFF2C2216, 0xFF6E5A3F, 0xFF8C6239, 0xFFEADBC4,
                    0x44C89B57, 0xFFFDF8EE);
        }
    }

    public static String cycleThemeButton(String currentTheme, String dotCategory) {
        if ("default".equals(dotCategory)) {
            return "default".equals(currentTheme) ? "dark" : "default";
        } else if ("emerald".equals(dotCategory)) {
            return "emerald".equals(currentTheme) ? "emerald-dark" : "emerald";
        } else if ("gold".equals(dotCategory)) {
            return "gold".equals(currentTheme) ? "gold-dark" : "gold";
        } else {
            return "beige";
        }
    }

    public static String toggleDarkLight(String currentTheme) {
        if ("gold".equals(currentTheme)) return "gold-dark";
        if ("gold-dark".equals(currentTheme)) return "gold";
        if ("emerald".equals(currentTheme)) return "emerald-dark";
        if ("emerald-dark".equals(currentTheme)) return "emerald";
        return "dark".equals(currentTheme) ? "default" : "dark";
    }

    public static GradientDrawable makeRoundedRect(int fillColor, int strokeColor, int strokePx, float radiusPx) {
        GradientDrawable gd = new GradientDrawable();
        gd.setShape(GradientDrawable.RECTANGLE);
        gd.setColor(fillColor);
        if (strokePx > 0) gd.setStroke(strokePx, strokeColor);
        gd.setCornerRadius(radiusPx);
        return gd;
    }

    public static GradientDrawable makeCircle(int fillColor, int strokeColor, int strokePx) {
        GradientDrawable gd = new GradientDrawable();
        gd.setShape(GradientDrawable.OVAL);
        gd.setColor(fillColor);
        if (strokePx > 0) gd.setStroke(strokePx, strokeColor);
        return gd;
    }
}
