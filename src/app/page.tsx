import React from "react";
import { BookOpen, Calendar, MapPin, QrCode, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* رأس الصفحة / شريط التنقل */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-500/20">
              I
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">سنتر ايكون التعليمي</h1>
              <span className="text-xs text-blue-600 font-medium">Icon Center</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              جاهز ومستضاف داخل Docker
            </span>
          </div>
        </div>
      </header>

      {/* قسم الترحيب الرئيسي */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>منظومة متكاملة لخدمة الطلاب والمدرسين وإدارة الحصص</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          أهلاً بكم في <span className="text-blue-600">سنتر ايكون</span>
        </h2>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          نظام ذكي متكامل يربط بين جداول حصص المدرسين، رصد الحضور الذكي بـ QR Code، وتسويات الحسابات المالية بدقة وسرعة.
        </p>

        {/* كروت الميزات الثلاث */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-right">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">جدول الحصص والأسعار</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              عرض مواعيد المدرسين والمواد والمراحل الدراسية لسهولة الحضور والمتابعة.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">حضور ذكي بالـ QR</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              مسح كارت الطالب عبر كاميرا الاستقبال وتأكيد الدفع والتنبيه بالمتأخرات في ثانية.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">موقع السنتر والتواصل</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              موقع معتمد على خرائط جوجل مع اتصال مباشر عبر واتساب والهاتف.
            </p>
          </div>
        </div>
      </section>

      {/* تذييل الصفحة */}
      <footer className="border-t bg-white py-6 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} سنتر ايكون التعليمي (Icon Center). جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Next.js 15 • Docker VMM • Zero-Cost Cloud Ready</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
