import { Component } from '@angular/core';

@Component({
  selector: 'kiki-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  items = [
    { bot: true, text: 'Hallo. Wie kann ich dir helfen?' },
    {
      bot: false,
      text: 'Wenn ich mit dem Auto 52 km/h Fahre, wie lange habe ich dann von Rain nach Luzern (13km)?',
    },
    {
      bot: true,
      text: `Du hast 0.25 h oder 15 Minuten<br><br>
      Die Geschwindigkeit (hier in Kilometer pro Stunde) gibt an, wie viel Weg du in einer gewissen Zeit zurücklegst. Dafür rechnest du Geschwindigkeit (Kilometer pro Stunde) mal Zeit (Stunden) und bekommst den zurückgelegten Weg (Kilometer).<br><br>
      In deiner Aufgabe hast du den Weg und die Geschwindigkeit, du musst also jetzt das Umgekehrte machen. Du rechnest Weg (Kilometer) geteilt durch Geschwindigkeit (Kilometer pro Stunde) und erhälst Zeit (Stunden). Die 0.25 Sunden kannst du noch in Minuten umrechnen, in dem du mal 60 rechnest. Eine Stunde hat nämlich 60.`,
    },
  ];

  autoGrowTextZone(e: any) {
    e.target.style.height = '0px';
    e.target.style.height = e.target.scrollHeight + 'px';
  }
}
