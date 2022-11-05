// use serial::prelude::*;

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]


#[tauri::command]
fn set_led_color(r:u8,g:u8,b:u8) {
  println!("I was invoked from JS! {r} {g} {b}");
}

let mut port:Result;

fn main() {
  // 
  serial::open("COM4").unwrap();
  // r#try(port.reconfigure(&|settings| {
  //   r#try(settings.set_baud_rate(serial::Baud9600));
  //   settings.set_char_size(serial::Bits8);
  //   settings.set_parity(serial::ParityNone);
  //   settings.set_stop_bits(serial::Stop1);
  //   settings.set_flow_control(serial::FlowNone);
  //   Ok(())
  // }));

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![set_led_color])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
