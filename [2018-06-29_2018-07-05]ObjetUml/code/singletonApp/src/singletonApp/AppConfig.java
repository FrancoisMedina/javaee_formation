package singletonApp;

import java.awt.Color;

public class AppConfig {
	
	private static AppConfig theInstance = null;
	
	public Color couleurFond;
	public String piedPageStandard;
	
	private AppConfig() {
		this.couleurFond = Color.LIGHT_GRAY;
		this.piedPageStandard = "(c) zorglub corporation";
	}
	
	public static AppConfig getApptConfig() {
		// s'il n'est pas d�j� instanci�
		if (theInstance == null) {
			// l'instancier alors et le m�moriser
			theInstance = new AppConfig();
		}
		// on renvoie l'instance m�moris�e
		return theInstance;
		
	}
	
}
