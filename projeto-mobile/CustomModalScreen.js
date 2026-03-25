import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Componente CustomModalScreen
 * @param {string} animation - Recebe 'slide', 'fade' ou 'none' para definir a transição.
 * @param {string} themeColor - Recebe uma cor em Hexadecimal para personalizar a interface.
 */
const CustomModalScreen = ({ animation, themeColor }) => {
  
  // HOOK DE ESTADO: Controle de visibilidade
  // O Modal no React Native é 'declarativo'. Ele só aparece se 'visible' for true.
  // Iniciamos com 'false' para que o modal permaneça oculto até a interação do usuário.
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.96)).current;

  const openModal = () => {
    setMounted(true);
    setVisible(true);
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 380,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.96,
        duration: 380,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setVisible(false);
      setMounted(false);
    });
  };

  useEffect(() => {
    if (!mounted) {
      return;
    }

    opacity.setValue(0);
    scale.setValue(0.96);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [mounted, opacity, scale]);

  return (
    // SAFEAREAVIEW: Protege o conteúdo contra recortes físicos (Notch) e barras de status.
    // Usamos um array no style para combinar o estilo fixo com uma cor de fundo dinâmica.
    // O '+ 10' no final da themeColor aplica uma transparência de 10% (padrão Hexadecimal).
    <SafeAreaView style={[styles.screenContainer, { backgroundColor: themeColor + '10' }]}>
      
      {/* EXIBIÇÃO DO MODO: Mostra ao usuário qual tipo de animação está sendo testada */}
      <Text style={[styles.headerText, { color: themeColor }]}>
        Modo: {animation.toUpperCase()}
      </Text>
      
      {/* BOTÃO DE ATIVAÇÃO: Ao ser pressionado (onPress), altera o estado para 'true' */}
      <TouchableOpacity 
        style={[styles.mainButton, { backgroundColor: themeColor }]} 
        onPress={openModal}
      >
        <Text style={styles.buttonText}>ABRIR MODAL {animation.toUpperCase()}</Text>
      </TouchableOpacity>

      {/* COMPONENTE MODAL: A camada sobreposta de alto nível */}
      <Modal
        animationType="none"
        transparent={true}        // Essencial para que possamos ver o overlay escurecido por baixo
        visible={visible}          // Conecta a visibilidade ao nosso estado 'visible'
        // ACESSIBILIDADE ANDROID: Permite fechar o modal ao apertar o botão físico de voltar
        onRequestClose={closeModal}
      >
        {/* 
            ESTRATÉGIA DE BACKDROP (FUNDO):
            Este TouchableOpacity ocupa a tela toda (flex: 1) e serve para capturar
            toques fora do card branco. Ao tocar aqui, o modal fecha.
            activeOpacity={1} garante que o fundo não mude de cor ao ser clicado.
        */}
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPressOut={closeModal} // Fecha o modal ao detectar toque fora do card
        >
          {/* 
              CARD DO MODAL (O CONTEÚDO):
              Envolvido em uma View para que toques dentro dele não fechem o modal acidentalmente,
              pois a View não propaga o evento de clique para o TouchableOpacity pai.
          */}
          <Animated.View
            style={[
              styles.modalCard,
              {
                opacity,
                transform: [{ scale }],
              },
            ]}
          >
            
            {/* INDICADOR VISUAL: Barra colorida no topo para reforçar a identidade da aba */}
            <View style={[styles.colorIndicator, { backgroundColor: themeColor }]} />
            
            <Text style={styles.modalTitle}>Animação {animation}</Text>
            
            <Text style={styles.modalBody}>
              Esta transição demonstra o comportamento nativo do tipo "{animation}".
            </Text>

            {/* BOTÃO DE FECHAMENTO MANUAL: Uma alternativa clara de saída dentro do card */}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>FECHAR</Text>
            </TouchableOpacity>
            
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

// Estilos detalhados para garantir uma interface limpa
const styles = StyleSheet.create({
  // Container principal da tela que recebe o componente
  screenContainer: { 
    flex: 1,                    // Faz a View ocupar 100% do espaço disponível na tela
    justifyContent: 'center',    // Alinha o botão de abrir no centro vertical (eixo principal)
    alignItems: 'center',        // Alinha o botão de abrir no centro horizontal (eixo secundário)
    padding: 20                  // Garante uma margem de segurança nas laterais da tela
  },

  // Estilo do título que identifica o tipo de animação na tela
  headerText: { 
    fontSize: 24,               // Tamanho grande para hierarquia visual de título
    fontWeight: '900',          // Peso máximo da fonte para dar destaque e clareza
    marginBottom: 20            // Afasta o título do botão que vem logo abaixo
  },

  // Estilo do botão que dispara a abertura do Modal
  mainButton: { 
    paddingVertical: 15,        // Espaçamento interno em cima e embaixo para aumentar a área de toque
    paddingHorizontal: 30,      // Espaçamento interno nas laterais para o botão não ficar "apertado"
    borderRadius: 12,           // Arredonda as bordas para um visual moderno e amigável
    elevation: 4                // Adiciona uma sombra projetada (específico para Android)
  },

  // Estilo do texto dentro do botão principal
  buttonText: { 
    color: '#fff',              // Branco para garantir contraste máximo com as cores de fundo
    fontSize: 16,               // Tamanho padrão de leitura confortável para botões
    fontWeight: 'bold'          // Negrito para destacar a ação do botão
  },

  // Camada de fundo que sobrepõe a tela quando o modal abre (Backdrop)
  modalOverlay: { 
    flex: 1,                    // Ocupa toda a extensão da tela para bloquear interações no fundo
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Cor preta com 70% de transparência para dar foco ao Modal
    justifyContent: 'center',    // Centraliza o card branco verticalmente
    alignItems: 'center'         // Centraliza o card branco horizontalmente
  },

  // O card branco que contém a informação do Modal
  modalCard: { 
    width: '80%',               // Ocupa 80% da largura da tela, deixando as bordas do fundo visíveis
    backgroundColor: '#fff',     // Fundo branco sólido para legibilidade
    borderRadius: 20,           // Bordas bem arredondadas para transmitir suavidade
    padding: 25,                // Espaçamento interno para o conteúdo não tocar nas bordas do card
    alignItems: 'center',       // Centraliza todos os textos e botões dentro do card
    overflow: 'hidden'          // Corta qualquer elemento filho que tente sair do limite arredondado do card
  },

  // Linha colorida no topo do modal para identificação visual rápida
  colorIndicator: { 
    width: '120%',              // Um pouco maior que o card para cobrir as curvas das bordas
    height: 10,                 // Espessura da barra colorida
    position: 'absolute',       // Retira do fluxo de texto para "colar" no topo do card
    top: 0                      // Fixa exatamente na extremidade superior do Modal
  },

  // Título interno do Modal
  modalTitle: { 
    fontSize: 22,               // Tamanho de destaque para o título interno
    fontWeight: 'bold',         // Negrito para autoridade da informação
    marginTop: 15,              // Espaço para não encostar na barra colorida do topo
    marginBottom: 10            // Espaço antes do texto descritivo
  },

  // Texto descritivo que explica a animação ao usuário
  modalBody: { 
    fontSize: 16,               // Tamanho padrão para leitura de corpo de texto
    textAlign: 'center',        // Centraliza o texto para manter a simetria do card
    color: '#666',              // Cinza escuro para ser menos agressivo que o preto puro
    marginBottom: 20            // Espaço antes do botão de fechar
  },

  // Botão secundário para fechar o Modal (Estilo Ghost/Outline)
  closeButton: { 
    borderWidth: 1,             // Adiciona uma borda fina em vez de fundo sólido
    borderColor: '#ddd',        // Cor de borda neutra para não competir com o botão principal
    paddingVertical: 10,        // Altura do botão de fechar
    paddingHorizontal: 20,      // Largura do botão de fechar
    borderRadius: 8             // Bordas levemente arredondadas
  },

  // Texto do botão de fechar
  closeButtonText: { 
    color: '#666',              // Cor neutra para indicar uma ação secundária ou de cancelamento
    fontWeight: 'bold'          // Negrito para facilitar a leitura da ação de saída
  },
});

export default CustomModalScreen;